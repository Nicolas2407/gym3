import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import Espalda from "./pages/Espalda.vue";
import Brazos from "./pages/Brazos.vue";
import Piernas from "./pages/Piernas.vue";
import Pecho from "./pages/Pecho.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/espalda", component: Espalda },
  { path: "/brazos", component: Brazos },
  { path: "/piernas", component: Piernas },
  { path: "/pecho", component: Pecho },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
const routes = [
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

