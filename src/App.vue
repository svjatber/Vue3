<template>
  <base-card>
    <template #main>
      <the-header></the-header>
      <badge-list></badge-list>
    </template>
    <template v-slot:second>
      <user-info
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
      ></user-info>
    </template>
  </base-card>
</template>

<script>
import TheHeader from './components/TheHeader'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import BaseCard from './components/BaseCard'

export default {
  components: {
    BaseCard,
    TheHeader,
    BadgeList,
    UserInfo
  },
  data () {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin'
      }
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
