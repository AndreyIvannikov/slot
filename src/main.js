import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "./plugins/vueComponents";

import App from "./App.vue";
import store from "./vuex/index";
import router from "./router/index";
import "./main.scss";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import vuetify from "@/plugins/vuetify";

const requireComponent = require.context(
  "./components",
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

Vue.use(Vuetify).use(VueRouter);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
