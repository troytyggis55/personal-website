import { createStore } from 'vuex'

export default createStore({
  state: {
    isMobileDevice: false,
  },
  getters: {
    isMobile: (state: { isMobileDevice: any; }) => state.isMobileDevice,
  },
  mutations: {
    SET_IS_MOBILE(state: { isMobileDevice: any; }, value: any) {
      state.isMobileDevice = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
