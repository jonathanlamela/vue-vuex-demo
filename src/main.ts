import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cartStore from './stores/cartStore'

const app = createApp(App)
app.use(cartStore)
app.mount('#app')
