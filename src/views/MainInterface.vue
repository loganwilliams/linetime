<template>
  <div class="home">
    <ControlBar @setText="setText($event)" />
    <div class="map">
      <div class="switcher">
        <button @click="$store.commit('setMode', 'default')">
          Default map
        </button>
        <button @click="$store.commit('setMode', 'opentopo')">OpenTopo</button>
        <button @click="$store.commit('setMode', 'satellite')">
          Satellite
        </button>
      </div>

      <l-map :zoom="zoom" :center="center" ref="map" @mousemove="mousemove">
        <l-tile-layer
          v-if="$store.state.mode === 'opentopo'"
          :url="'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'"
          :attribution="''"
        />
        <l-tile-layer
          v-if="$store.state.mode === 'default'"
          :url="
            'https://api.mapbox.com/styles/v1/loganw/ckcbhkmuv12421ikdmvzfjctk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6IlQzWHJqc3cifQ.KY3j-syHXeYmI69JmLqGqQ'
          "
          :attribution="''"
        />
        <l-tile-layer
          v-if="$store.state.mode === 'satellite'"
          :url="
            'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.jpg90?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6IlQzWHJqc3cifQ.KY3j-syHXeYmI69JmLqGqQ'
          "
          :attribution="''"
        />

        <l-geo-json
          v-if="$store.state.trace"
          :geojson="$store.state.trace"
          @click="click"
          @mouseenter="hovering = true"
          @mouseleave="hovering = false"
          :optionsStyle="(f) => ({ color: '#ff73c1', weight: 4 })"
        ></l-geo-json>
        <l-geo-json
          v-if="$store.state.trace"
          :geojson="$store.state.trace"
          @click="click"
          @mouseenter="hovering = true"
          @mouseleave="hovering = false"
          :optionsStyle="
            (f) =>
              $store.state.mode === 'opentopo'
                ? { color: 'black', weight: 2 }
                : { color: '#cc1c58', weight: 2 }
          "
        ></l-geo-json>
        <l-circle-marker
          v-if="$store.getters.indexPoint"
          :lat-lng="$store.getters.indexPoint"
          :radius="6"
          color="#ff73c1"
          fillColor="black"
          :fillOpacity="1"
        ></l-circle-marker>
        <l-circle-marker
          v-for="p in $store.getters.pointsWithTimestamp"
          :key="p.index"
          :lat-lng="p.point"
          :radius="4"
          color="#cc1c58"
          fillColor="#ffecd6"
          :fillOpacity="1"
          :weight="2"
          @click="$store.commit('setIndex', p.index)"
        ></l-circle-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { latLng } from "leaflet";
import { LMap, LTileLayer, LGeoJson, LCircleMarker } from "vue2-leaflet";
import tj from "togeojson";
import * as turf from "@turf/turf";
import ControlBar from "../components/ControlBar";

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LCircleMarker,
    ControlBar,
  },
  data() {
    return {
      zoom: 11,
      center: latLng(41.0001322, -123.04219482),
      text: "",
      date: "",
      hovering: false,
    };
  },
  methods: {
    load(e) {
      console.log(e);
    },
    setText({ file, content }) {
      let gpx = new DOMParser().parseFromString(content, "text/xml");
      let converted = tj.gpx(gpx);

      // TODO handle multiple featueres better

      if (converted.type === "FeatureCollection") {
        converted = converted.features[0];
      }

      this.$store.commit("setTrace", converted);
      this.$store.commit("setFilename", file);

      let bbox = turf.bbox(converted);

      this.$refs.map.mapObject.fitBounds([
        bbox.slice(0, 2).reverse(),
        bbox.slice(2).reverse(),
      ]);
    },
    click(e) {
      var targetPoint = turf.point([e.latlng.lng, e.latlng.lat]);

      var points = turf.featureCollection(
        this.$store.state.trace.geometry.coordinates.map((c) => turf.point(c))
      );

      var nearest = turf.nearestPoint(targetPoint, points);

      this.$store.commit("setIndex", nearest.properties.featureIndex);
    },
    mousemove(e) {
      if (!this.hovering) return;
      var targetPoint = turf.point([e.latlng.lng, e.latlng.lat]);

      var points = turf.featureCollection(
        this.$store.state.trace.geometry.coordinates.map((c) => turf.point(c))
      );

      var nearest = turf.nearestPoint(targetPoint, points);

      this.$store.commit("setHoverIndex", nearest.properties.featureIndex);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
}

.map {
  height: calc(100% - 53px);
  position: relative;
}

.switcher {
  position: absolute;
  z-index: 1000;
  right: 1em;
  top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  background-color: #0d2b45;
  opacity: 0.8;
  text-align: center;

  button {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
}
</style>

<style lang="scss">
button {
  border: 1px solid #ffaa5e;
  border-radius: 2px;
  cursor: pointer;
  padding: 0.5em;
  height: auto;
  background-color: #0d2b45;
  color: white;
  margin-left: auto;
  margin-right: 0px;

  &:hover {
    background-color: #544e68;
  }
}
</style>
