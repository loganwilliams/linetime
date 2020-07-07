<template>
  <div class="home">
    <ControlBar @setText="setText($event)" />
    <div class="map">
      <l-map :zoom="zoom" :center="center" ref="map">
        <l-tile-layer
          :url="'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'"
          :attribution="''"
        />
        <l-geo-json
          v-if="$store.state.trace"
          :geojson="$store.state.trace"
          :optionsStyle="(f) => ({ color: '#ffffff', weight: 6 })"
        ></l-geo-json>
        <l-geo-json
          v-if="$store.state.trace"
          :geojson="$store.state.trace"
          @click="click"
          :optionsStyle="(f) => ({ color: '#ff0024', weight: 3 })"
        ></l-geo-json>
        <l-circle-marker
          v-if="$store.getters.indexPoint"
          :lat-lng="$store.getters.indexPoint"
          :radius="5"
          color="black"
        ></l-circle-marker>
        <l-circle-marker
          v-for="p in $store.getters.pointsWithTimestamp"
          :key="p.index"
          :lat-lng="p.point"
          :radius="3"
          color="black"
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
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
}

.map {
  height: calc(100% - 60px);
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
