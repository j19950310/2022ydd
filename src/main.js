import { createApp } from 'vue'
import App from './App.vue'

import router from "./router"

// CSS
import "@/style/main.scss"

createApp(App).use(router).mount('#app')
