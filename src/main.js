import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/main.css'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

createApp(App).use(createPinia()).use(VueCookies).use(router).mount('#app')
