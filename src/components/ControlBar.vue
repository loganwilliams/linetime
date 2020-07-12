<template>
  <div class="top">
    <div class="title">
      <span class="strong">Linetime</span>: add timestamps to GPX traces
    </div>
    <file-reader @load="$emit('setText', $event)"></file-reader>
    <div class="loaded" v-if="$store.state.filename">
      <div class="name" v-if="$store.state.filename">
        {{ $store.state.filename }}
      </div>
      <PointEditor
        v-if="$store.getters.indexPoint"
        :point="$store.getters.indexPoint"
        :index="$store.state.activeIndex"
      />
      <div v-else>
        Click on the route line to view an interpolated time or set a time
        keypoint
      </div>
      <div class="export-container">
        <button class="export" @click="exportGeojson">
          Export GPX with timestamps
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PointEditor from "../components/PointEditor";
import FileReader from "../components/FileReader";
import { saveAs } from "file-saver";
import togpx from "togpx";

export default {
  name: "ControlBar",
  components: {
    PointEditor,
    FileReader,
  },
  methods: {
    exportGeojson() {
      let coordinates = this.$store.state.trace.geometry.coordinates.map(
        (c, i) => [c[0], c[1], this.$store.getters.getInterpolatedTime(i)]
      );

      let gj = {
        ...this.$store.state.trace,
        geometry: { ...this.$store.state.trace.geometry, coordinates },
        properties: {
          ...this.$store.state.trace.properties,
          coordTimes: coordinates.map((c) => new Date(c[2]).toISOString()),
        },
      };

      let gpx = togpx(gj);
      var blob = new Blob([gpx], { type: "text/xml" });

      saveAs(blob, "output.gpx");
    },
  },
};
</script>

<style scoped lang="scss">
.top {
  display: flex;
  align-items: center;
  padding-left: 1em;
  background-color: #101024;
  color: white;
  height: 52px;
  border-bottom: 1px solid #544e68;
}

.export-container {
  flex-grow: 1;
  text-align: right;
  margin-right: 1em;
}

.loaded {
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 1em;
  padding-left: 1em;
  background-color: #203c56;
  height: 100%;
}

.name {
  font-weight: bold;
  margin-right: 1em;
}

.title {
  margin-right: 1em;
}

.strong {
  font-weight: bold;
  text-decoration: underline;
}
</style>
