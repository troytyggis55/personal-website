import { createStore } from 'vuex'

export default createStore({
  state: {
    showEffects: true,
  },
  getters: {
    showEffects: state => state.showEffects,
  },
  mutations: {
    toggleEffects(state) {
      state.showEffects = !state.showEffects
    }
  },
  actions: {
  },
  modules: {
  }
})
