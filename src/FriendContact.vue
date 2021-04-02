<template>
    <li>
      <h2>{{name}} - {{isFavourite ? '(Favourite)' : ''}}</h2>
      <button @click="showDetails = !showDetails">{{!showDetails ? 'Show' : 'Hide' }}</button>
      <button @click="toggleInPar(id )">show</button>
      <ul v-if="showDetails">
        <li><strong>Phone</strong> {{phone}}</li>
        <li><strong>Email</strong> {{email}}</li>
      </ul>
      <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
  name: 'FriendContact',
  // props: [
  //   'name',
  //   'phone',
  //   'email',
  //   'isFavourite'
  // ],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    toggleInPar: {
      required: false
    },
    isFavourite: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      showDetails: true
    }
  },
  methods: {
    toogleFavourite () {
      this.$emit('toggle-favorite', this.id)
    }
  }
}
</script>

<style scoped>

</style>
