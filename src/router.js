import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './pages/login.vue'
import HomePage from './pages/homepage.vue'
import EspaldaPage from './pages/Espalda.vue'
import BrazosPage from './pages/Brazos.vue'
import PiernasPage from './pages/Piernas.vue'
import PechoPage from './pages/Pecho.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/espalda',
    component: EspaldaPage
  },
  {
    path: '/brazos',
    component: BrazosPage
  },
  {
    path: '/piernas',
    component: PiernasPage
  },
  {
    path: '/pecho',
    component: PechoPage
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})