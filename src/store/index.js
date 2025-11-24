import Vue from "vue";
import Vuex from "vuex";
import * as turf from "@turf/turf";
import tj from "togeojson";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trace: false,
    featureCollection: [],
    activeIndex: -1,
    hoverIndex: -1,
    filename: false,
    mode: "default",
    timeIndex: 2,
  },
  mutations: {
    setTrace(state, trace) {
      state.trace = trace;
      state.activeIndex = -1;
      state.hoverIndex = -1;
    },
    setIndex(state, index) {
      state.activeIndex = index;
    },
    setHoverIndex(state, index) {
      state.hoverIndex = index;
    },
    setFilename(state, file) {
      state.filename = file.name;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    setFeatureCollection(state, collection) {
      state.featureCollection = collection;
    },
    setTimeAtActiveIndex(state, time) {
      let coordinates = state.trace.geometry.coordinates;
      coordinates[state.activeIndex][state.timeIndex] = time;
      state.trace = {
        ...state.trace,
        geometry: { ...state.trace.geometry, coordinates },
      };
    },
    setTimeIndex(state, index) {
      state.timeIndex = index;
    },
  },
  actions: {
    processGpx({ commit }, { file, content }) {
      let gpx = new DOMParser().parseFromString(content, "text/xml");
      let converted = tj.gpx(gpx);

      let trace = converted;
      if (converted.type === "FeatureCollection") {
        trace = converted.features[0];
      }
     
      if (trace.geometry.coordinates[0].length < 3) {
        commit("setTimeIndex", 2);
      } else {
        let maxIndex2 = 0;
        for (let coord of trace.geometry.coordinates) {
          if (!isNaN(coord[2])) {
            if (coord[2] > maxIndex2) {
              maxIndex2 = coord[2];
            }
          }
        }

        if (maxIndex2 > 1e12) {
          commit("setTimeIndex", 2);
        } else {
          commit("setTimeIndex", 3);
        }
      }

      commit("setTrace", trace);
      commit("setFilename", file);
      commit("setFeatureCollection", converted.features);
    },
  },
  modules: {},
  getters: {
    indexPoint(state) {
      if (state.activeIndex < 0) return null;
      let p = state.trace.geometry.coordinates[state.activeIndex];
      let indexPoint = [p[1], p[0], ...p.slice(2)];
      return indexPoint;  
    },

    hoverPoint(state) {
      if (state.hoverIndex < 0) return null;
      let p = state.trace.geometry.coordinates[state.hoverIndex];
      return [p[1], p[0], ...p.slice(2)];
    },

    pointsWithTimestamp(state) {
      if (!state.trace) return [];
      let points = state.trace.geometry.coordinates
        .map((c, i) => ({ point: [c[1], c[0], ...c.slice(2)], index: i }))
        .filter((c) => !isNaN(c.point[state.timeIndex]));
      return points;
    },

    getInterpolatedTime(state) {
      const trace = state.trace.geometry.coordinates;

      return (i) => {
        let index = i;

        if (trace[index][state.timeIndex]) return trace[index][state.timeIndex];

        let above = null;
        while (index < trace.length - 1 && !above) {
          index += 1;
          if (trace[index][state.timeIndex]) {
            above = index;
          }
        }

        index = i;

        let below = null;
        while (index > 0 && !below) {
          index -= 1;
          if (trace[index][state.timeIndex]) {
            below = index;
          }
        }

        index = i;

        if ((!above && above !== 0) && (!below && below !== 0)) return null;
        if ((!above && above !== 0) || (!below && below !== 0)) {
          return (above || above === 0) ? trace[above][state.timeIndex] : trace[below][state.timeIndex];
        }

        let line = turf.lineString(trace.slice(below, above + 1));
        let subline = turf.lineString(trace.slice(below, index + 1));

        let alpha = turf.length(subline) / turf.length(line);

        return trace[above][state.timeIndex] * alpha + (1 - alpha) * trace[below][state.timeIndex];
      };
    },
  },
});
