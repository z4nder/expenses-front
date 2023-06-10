import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import Cookie from '../plugins/cookie'
import { useUserStore } from '../store/useUserStore'
import dataFormat from '../plugins/dataFormat'

type Login = {
  email: string
  password: string
}

type Register = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const useAuth = () => {
  const errors = ref({})
  const router = useRouter()
  const store = useUserStore()

  const login = async (params: Login) => {
    errors.value = {}

    try {
      const response = await axios.post('/login', params)

      const token = `${response.data.token_type} ${response.data.access_token}`
      Cookie.setToken(token)
      router.push({ name: 'home' })
    } catch (e: any) {
      if (e.response?.status === 422) {
        errors.value = dataFormat.formatErrors(e.response.data.errors)
      } else if (e.response.status === 401) {
        errors.value = { general: e.response.data.message }
      }
    }
  }

  const register = async (params: Register) => {
    errors.value = {}

    try {
      const response = await axios.post('/register', params)

      const token = `${response.data.token_type} ${response.data.access_token}`
      Cookie.setToken(token)
      router.push({ name: 'home' })
    } catch (e: any) {
      if (e.response?.status === 422) {
        errors.value = dataFormat.formatErrors(e.response.data.errors)
      }
    }
  }

  const logout = async () => {
    try {
      await axios.post('/logout')
      Cookie.deleteToken()
      await router.push({ name: 'login' })
    } catch (e) {
      console.log('Internal error', e)
    }
  }

  return {
    errors,
    login,
    register,
    logout,
    store
  }
}

export default useAuth
