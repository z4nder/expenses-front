import { createRouter, createWebHistory } from 'vue-router'
import Guard from './middleware'

import LayoutGuest from '../layouts/Guest.vue'
import LayoutDefault from '../layouts/Default.vue'

import Login from '../pages/auth/login.vue'
import Register from '../pages/auth/register.vue'

import Home from '../pages/Home.vue'
import NotFound from '../pages/404.vue'
import ExpenseIndex from '../pages/expense/index.vue'
import ExpenseCreate from '../pages/expense/create.vue'
import ExpenseEdit from '../pages/expense/edit.vue'

const expense = [
  { path: 'expense', name: 'expense.index', component: ExpenseIndex },
  { path: 'expense/create', name: 'expense.create', component: ExpenseCreate },
  { path: 'expense/:id/edit', name: 'expense.edit', component: ExpenseEdit, props: true }
]

const routes = [
  {
    path: '/not_found',
    component: LayoutDefault,
    beforeEnter: Guard.redirectIfNotAuthenticated,
    children: [{ path: '', name: 'not_found', component: NotFound }]
  },
  {
    path: '/',
    component: LayoutDefault,
    beforeEnter: Guard.redirectIfNotAuthenticated,
    children: [{ path: '', name: 'home', component: Home }, ...expense]
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
    children: [{ path: '', name: 'register', component: Register }]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
