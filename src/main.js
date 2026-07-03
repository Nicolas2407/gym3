import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from './router'   // <-- Agrega esta línea

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
})

app.use(router)   // <-- Agrega esta línea

app.mount('#app')