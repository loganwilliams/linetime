<template>
  <div class="selected-point">
    <div class="index">{{ "Selected point " + index }}</div>
    <div class="time" v-if="absoluteDate === date">
      Keypoint:
    </div>
    <div class="time" v-else-if="tempDateValue !== Math.floor(date)">
      New keypoint:
    </div>
    <div class="time" v-else>
      Interpolated:
    </div>
    <datetime v-model="tempDate" type="datetime" />
    <div class="set-time">
      <button @click="setTime(tempDate)">Set keypoint</button>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import moment from "moment";

export default {
  name: "PointEditor",
  components: {
    Datetime,
  },
  props: {
    index: Number,
    point: Array,
  },
  data() {
    return {
      tempDate: null,
    };
  },
  mounted() {
    this.tempDate = moment(this.date).toISOString();
  },
  computed: {
    date() {
      return (
        this.$store.getters.getInterpolatedTime(this.index) ||
        moment().valueOf()
      );
    },

    absoluteDate() {
      return this.point[2] || false;
    },

    tempDateValue() {
      return moment(this.tempDate).valueOf();
    },
  },
  methods: {
    getInterpolated(index) {
      return this.$store.getters.getInterpolatedTime(index);
    },

    formatTime(t) {
      return moment(t).format("YYYY-MM-DD hh:mm A");
    },

    setTime(d) {
      let t = moment(d);

      this.$store.commit("setTimeAtActiveIndex", t.valueOf());
    },
  },
  watch: {
    date(to) {
      this.tempDate = moment(to).toISOString();
    },

    index() {
      this.tempDate = moment(this.date).toISOString();
    },
  },
};
</script>

<style scoped lang="scss">
.selected-point {
  display: flex;
  align-items: center;

  div {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>

<style lang="scss">
.vdatetime-input {
  border: 1px solid #ffaa5e;
  border-radius: 2px;
  background-color: #0d2b45;
  color: white;
  margin-left: auto;
  margin-right: 0px;
  padding: 0.5em;
}
</style>
