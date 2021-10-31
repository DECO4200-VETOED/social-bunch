import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Group from '../views/Group.vue'
import Profile from '../views/Profile.vue'
import Contacts from '../views/Contacts.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  // {
  //   path: '/group',
  //   name: 'Group',
  //   component: Group
  // },
  {
    path: '/group/:id',
    name: 'Group',
    component: Group,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router