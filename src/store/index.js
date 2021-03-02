/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    isLogin: false
  },
  getters: {
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {
    userStatus(state, user) {
      if (user) {
        state.currentUser = user;
        state.isLogin = true;
      } else {
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions: {
    // 应用 mutations
    setUser({ commit }, user) {
      commit("userStatus", user);
    }
  }
});
