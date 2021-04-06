
import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from '@/pages/TeamsList'
import UsersList from '@/pages/UsersList'
import TeamMembers from '@/components/teams/TeamMembers'
import NotFound from '@/pages/NotFound'
import TeamFooter from '@/pages/TeamFooter'
import UserFooter from '@/pages/UserFooter'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'team',
      path: '/',
      redirect: '/teams'
    },
    {
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter (to, from, next) {
        console.log('beforeEnter')
        console.log(to, from, next)
        next()
      }
    },
    {
      path: '/:MotFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior (_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  if (to.meta.needsAuth) {
    console.warn('needsAuth')
    next()
  } else {
    next()
  }
  // if (to.name === 'team-members') {
  //   next()
  // }
  // next({ name: 'team-members', params: { teamId: 't2' } })
  // next()
})

router.afterEach(function (to, from) {
  console.warn('Global afterEach')
})

export default router
