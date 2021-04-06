<template>
  <button @click="increase({ value: 1 })">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // increaseOne () {
    //   // this.$store.commit('increase', {value: 2})
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 1
    //   })
    // }
    ...mapActions(['increase'])
  }
}
</script>
<style scoped>

</style>
