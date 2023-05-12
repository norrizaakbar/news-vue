import Vue from "vue";
import App from "./App.vue";
// import sass from "sass";
import store from "./store";
import router from "./router";
import CKeditor from "@ckeditor/ckeditor5-vue2";

Vue.config.productionTip = false;
Vue.use(CKeditor);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
// Vue.prototype.$sass = sass;
