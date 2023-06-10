import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/pages/auth/login.vue')

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      middleware: 'guest',
      title: `Login`
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware == 'guest') {
//     if (store.state.auth.authenticated) {
//       next({ name: 'dashboard' })
//     }
//     next()
//   } else {
//     if (store.state.auth.authenticated) {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   }
// })

export default router
