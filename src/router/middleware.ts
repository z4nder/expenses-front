import Cookie from '../plugins/cookie'
import axios from 'axios'
import { useUserStore } from '../store/useUserStore'

export default {
  async redirectIfNotAuthenticated(to: any, from: any, next: any) {
    const store = useUserStore()
    const token = Cookie.getToken()
    let n

    if (!token) {
      n = { name: 'login' }
    }

    // Verificar se o token está valido
    await axios
      .get('/me')
      .then((response) => {
        store.storeUser(response.data)
      })
      .catch(() => {
        Cookie.deleteToken()
        n = { name: 'login' }
      })

    next(n)
  },
  redirectIfAuthenticated(to: any, from: any, next: any) {
    const token = Cookie.getToken()
    let n

    if (token) {
      n = { name: 'index' }
    }

    next(n)
  }
}
