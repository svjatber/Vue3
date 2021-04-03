<template>
  <the-header/>
  <button @click="setselectedComponent('active-goals')">Active Goals</button>
  <button @click="setselectedComponent('manage-goals')">Manage Goals</button>
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
<!--  <active-goals></active-goals>-->
<!--  <manage-goals></manage-goals>-->
</template>

<script>
// import TheHeader from './components/TheHeader'
// import BadgeList from './components/BadgeList.vue'
// import UserInfo from './components/UserInfo.vue'
// import BaseCard from './components/BaseCard'

import ActiveGoals from '@/components/ActiveGoals'
import ManageGoals from '@/components/ManageGoals'
import TheHeader from '@/components/layout/TheHeader'

export default {
  components: {
    TheHeader,
    // BaseCard,
    // TheHeader,
    // BadgeList,
    // UserInfo
    ActiveGoals,
    ManageGoals
  },
  data () {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin'
      },
      selectedComponent: 'active-goals'
    }
  },
  methods: {
    setselectedComponent (value) {
      this.selectedComponent = value
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
