<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveInput">saveInput</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue'

export default {
  components: {
    UserItem
  },
  data () {
    return { save: false }
  },
  inject: ['users'],
  methods: {
    confirmInput () {
      this.$router.push('/teams')
    },
    saveInput () {
      this.save = true
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteUsers')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('routeLeave')
    if (this.save) {
      next()
    } else {
      const s = confirm('are u sure')
      next(s)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
