import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    modal: false,
    content: {},
  },
  mutations: {
    openModal(state) {
      state.modal = true;
    },
    setContent(state, payload) {
      state.content = payload;
      this.commit("openModal");
    },
    close(state) {
      state.modal = false;
    },
  },
  getters: {
    isOpenPopup(state) {
      return state.modal;
    },
    content(state) {
      return state.content;
    },
  },
});

export default store;
