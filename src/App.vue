<template>
  <base-container title="Vuex" v-if="showAuth">
    <the-counter/>
    <button @click="increment(1)">Add 1</button>
    <change-counter/>
  </base-container>
  <base-container title="Auth">
    <user-auth/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue'
import TheCounter from '@/components/TheCounter'
import ChangeCounter from '@/components/ChangeCounter'
import { mapActions, mapGetters } from 'vuex'
import UserAuth from '@/components/UserAuth'
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth
  },
  methods: {
    // addOne () {
    //   this.$store.dispatch('increment', 1)
    // }
    ...mapActions(['increment'])
  },
  computed: {
    ...mapGetters(['showAuth'])
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
