import Vue from "vue";
import VueRouter from "vue-router";
import MainInterface from "../views/MainInterface.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainInterface,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
