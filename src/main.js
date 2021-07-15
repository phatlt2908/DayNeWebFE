import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/scss/main.scss')

const vueApp = createApp(App)
vueApp.use(router)

vueApp.mount('#app')
