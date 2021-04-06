import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state () {
    return {
      counter: 0,
      isAuth: false
    }
  },
  mutations: {
    increment (state, num) {
      state.counter = state.counter + num
    },
    increase (state, payload) {
      state.counter = state.counter - payload.value
    },
    setAuth (state, payload) {
      state.isAuth = payload.isAuth
    }
  },
  actions: {
    increment (context, payload) {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 2000)
    },
    increase (context, payload) {
      setTimeout(() => {
        context.commit('increase', { ...payload })
      }, 2000)
    },
    login (context) {
      context.commit('setAuth', { isAuth: true })
    },
    logout (context) {
      context.commit('setAuth', { isAuth: false })
    }
  },
  getters: {
    showState (state) {
      return state.counter
    },
    validState (state, getters) {
      console.log('aa')
      if (getters.showState < 0) {
        state.counter = 0
        return 0
      }
      if (getters.showState >= 10) {
        state.counter = 0
        return 0
      }
      return getters.showState
    },
    showAuth (state) {
      return state.isAuth
    }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
