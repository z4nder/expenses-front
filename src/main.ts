import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'

const app = createApp(App)

app.use(router)
const apiClient = axios.create({
  baseURL: 'localhost:8000/api', // Replace with your API URL
  withCredentials: true, // Send cookies along with the request
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

app.config.globalProperties.$axios = apiClient

import input from './components/v/input.vue'
import a from './components/v/a.vue'
import button from './components/v/button.vue'

app.component('v-input', input)
app.component('v-a', a)
app.component('v-button', button)

app.mount('#app')
