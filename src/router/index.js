import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home";

import Detail from "@/organisms/Detail";
import Edit from "@/components/Edit";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/edit/:id",
      name: "EditNews",
      component: Edit,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
    },
  ],
});
