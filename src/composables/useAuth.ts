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
  confirm_password: string
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
      router.push({ name: 'index' })
    } catch (e: any) {
      if (e.response?.status === 422) {
        errors.value = dataFormat.formatErrors(e.response.data.errors)
      } else if (e.response.status === 401) {
        errors.value = { general: e.response.data.message }
      }
    }
  }

  return {
    errors,
    login,
    store
  }
}

export default useAuth
