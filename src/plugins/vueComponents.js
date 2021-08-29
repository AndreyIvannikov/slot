import Vue from "vue";

Vue.component("v-button", () => import("@/components/@ui/button"));
Vue.component("s-input", () => import("@/components/@ui/input/TextField"));
Vue.component("popup-warning", () => import("@/components/@ui/Popup"));
