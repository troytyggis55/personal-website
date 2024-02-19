import { createApp } from 'vue'
import App from './App.vue'
import './assets/normalize.css'
import './assets/global.scss'
import store from './store'

createApp(App).use(store).mount('#app')
