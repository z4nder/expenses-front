import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from './plugins/axios'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

import input from './components/v/input.vue'
import a from './components/v/a.vue'
import button from './components/v/button.vue'
import money from './components/v/money.vue'

app.component('v-input', input)
app.component('v-a', a)
app.component('v-button', button)
app.component('v-money', money)

app.config.globalProperties.$axios = axios

app.mount('#app')
