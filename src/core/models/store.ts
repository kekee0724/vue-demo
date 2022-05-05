import { CoreState } from './state'
import { createStore } from 'vuex'

export const store = createStore({
  state: CoreState,
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    }
  },
  modules: {
  }
})
