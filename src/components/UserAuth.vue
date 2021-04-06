<template>
  <button @click="login" v-if="!showAuth">Login</button>
  <button @click="logout" v-if="showAuth">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['showAuth'])
  }
}
</script>

<style scoped>

</style>
