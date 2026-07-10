import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/homepage.vue";
import Espalda from "./pages/Espalda.vue";
import Brazos from "./pages/Brazos.vue";
import Piernas from "./pages/Piernas.vue";
import Pecho from "./pages/Pecho.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomePage },
  { path: "/espalda", component: Espalda },
  { path: "/brazos", component: Brazos },
  { path: "/piernas", component: Piernas },
  { path: "/pecho", component: Pecho },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
