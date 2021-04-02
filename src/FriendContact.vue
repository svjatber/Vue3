<template>
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="showDetails = !showDetails">{{!showDetails ? 'Show' : 'Hide' }}</button>
      <ul v-if="showDetails">
        <li><strong>Phone</strong> {{friend.phone}}</li>
        <li><strong>Email</strong> {{friend.email}}</li>
      </ul>
    </li>
</template>

<script>
export default {
  name: 'FriendContact',
  data () {
    return {
      showDetails: true,
      friend: {
        id: 'manual',
        name: 'Manuel Lorenz',
        phone: '0123 45 67',
        email: 'manuel@localhost.com'
      }
    }
  }
}
</script>

<style scoped>

</style>
