import { createRouter, createWebHistory } from 'vue-router'
import Guard from './middleware'

import LayoutGuest from '../layouts/Guest.vue'
import LayoutDefault from '../layouts/Default.vue'

import Login from '../pages/auth/login.vue'

import ExpenseIndex from '../pages/expense/index.vue'

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    beforeEnter: Guard.redirectIfNotAuthenticated,
    children: [{ path: '', name: 'index', component: ExpenseIndex }]
  },
  {
    path: '/login',
    component: LayoutGuest,
    beforeEnter: Guard.redirectIfAuthenticated,
    children: [{ path: '', name: 'login', component: Login }]
  },
  {
    path: '/register',
    component: LayoutGuest,
    children: [{ path: '', name: 'register', component: Login }]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
