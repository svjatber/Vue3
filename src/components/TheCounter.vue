<template>
  <h3>{{showState}}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // counter () {
    //   return this.$store.getters.validState
    // }
    ...mapGetters(['showState'])
  }
}
</script>

<style scoped>

</style>
