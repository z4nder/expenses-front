import { computed } from 'vue'
import apiClient from '../plugins/apiClient'

type User = {
  name: string
  email?: string
}

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

// Value is initialized in: ~/plugins/auth.ts
export const useUser = () => {
  return {
    name: 'aaa'
  }
}

const useAuth = () => {
  const user = useUser()
  const isLoggedIn = computed(() => !!user)

  async function login(credentials: Login) {
    const response = await apiClient.post('/login', credentials)

    console.log('response ', response)
  }

  return {
    user,
    isLoggedIn,
    login
  }
}

export default useAuth

// export const fetchCurrentUser = async () => {
//   try {
//     return await $larafetch<User>('/api/user', {
//       redirectIfNotAuthenticated: false
//     })
//   } catch (error) {
//     if ([401, 419].includes(error?.response?.status)) return null
//     throw error
//   }
// }
