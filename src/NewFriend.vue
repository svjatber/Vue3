<template>
  <form @submit.prevent="AddFriend">
    <div>
      <label>Name</label>
      <input type="text" v-model="name">
      <label>Phone</label>
      <input type="tel" v-model="phone">
      <label>Email</label>
      <input type="email" v-model="email">
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    AddFriend () {
      this.$emit('add-contact', { name: this.name, phone: this.phone, email: this.email })
    }
  }
}
</script>

<style scoped>

</style>
