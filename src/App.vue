<template>
  <header>
    <h1>{{name}}</h1>
  </header>
  <new-friend @add-contact="addContact"/>
  <ul>
    <FriendContact
      v-for="friend of friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
      :toggleInPar="toggleInPar"
      @toggle-favorite="toggleInPar"
      :isFavourite="friend.isFavorite"
      @delete = "deleteContact"
    />
  </ul>
</template>
<script>

import FriendContact from '@/FriendContact'
import NewFriend from '@/NewFriend'

export default {
  data () {
    return {
      name: 'Vue',
      friends: [
        {
          id: 'manual',
          name: 'Manuel Lorenz',
          phone: '0123 45 67',
          email: 'manuel@localhost.com',
          isFavorite: true
        },
        {
          id: 'julia',
          name: 'julia Lorenz',
          phone: '0123 45 67',
          email: 'julia@localhost.com',
          isFavorite: true
        }
      ]
    }
  },
  methods: {
    toggleInPar (value) {
      console.log('aeee')
      const indetifiedId = this.friends.find(v => v.id === value)
      indetifiedId.isFavorite = !indetifiedId.isFavorite
    },
    addContact (value) {
      const newFriend = { ...value, id: new Date().toISOString(), isFavorite: false }
      this.friends.push(newFriend)
    },
    deleteContact (value) {
      console.log('aa')
      this.friends = this.friends.filter(f => f.id !== value)
    }
  },
  components: {
    NewFriend,
    FriendContact
  }
}

</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
