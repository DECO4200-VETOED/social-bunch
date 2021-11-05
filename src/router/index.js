import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Group from '../views/Group.vue'
import Profile from '../views/Profile.vue'
import Contacts from '../views/Contacts.vue'
import Create from '../views/Create.vue'
import MessageBoard from '../views/MessageBoard.vue'
import Tutorial from '../views/Tutorial.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
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
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/group/:id',
    name: 'Group',
    component: Group,
    props: true
  },
  {
    path: '/group/:id/messages',
    name: 'Message Board',
    component: MessageBoard,
    props: true
  },
  { path: "*", component: Welcome }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router