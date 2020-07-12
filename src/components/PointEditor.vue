<template>
  <div class="selected-point">
    <div class="index">{{ "Selected point " + index }}</div>
    <div class="time key" v-if="absoluteDate === date">
      Keypoint:
    </div>
    <div class="time new" v-else-if="tempDateValue !== Math.floor(date)">
      New keypoint:
    </div>
    <div class="time interpolated" v-else>
      Interpolated:
    </div>
    <datetime v-model="tempDate" type="datetime" :uses12-hour="true" />
    <div
      :class="{
        'set-time': true,
        new: tempDateValue !== Math.floor(date) && absoluteDate !== date,
      }"
    >
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
  border-left: 1px solid #544e68;
  padding: 0.25em;
  border-radius: 2px;
  height: 100%;
  order: 2;

  @media (max-width: 692px) {
    border-left: none;
    padding-left: 0em;
    margin-left: -0.5em;
  }

  div {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}

.key,
.new {
  font-weight: bold;
}

.new {
  color: #ffaa5e;
}

.interpolated {
  font-style: italic;
}

.new button {
  background-color: #8d697a;
  font-weight: bold;

  &:hover {
    background-color: #d08159;
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

.vdatetime-popup__header {
  background-color: #032165;
}

.vdatetime-calendar__month__day--selected > span > span,
.vdatetime-calendar__month__day--selected:hover > span > span {
  background-color: #032165;
}

.vdatetime-popup__actions__button,
.vdatetime-time-picker__item--selected {
  color: #032165;
}

.vdatetime-popup {
  z-index: 10000 !important;
}
</style>
