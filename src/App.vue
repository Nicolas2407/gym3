<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const leftDrawerOpen = ref(false)
const route = useRoute()
const router = useRouter()

const menuItems = [
  { label: "Inicio", icon: "home", to: "/home" },
  { label: "Espalda", icon: "fitness_center", to: "/espalda" },
  { label: "Brazos", icon: "sports_gymnastics", to: "/brazos" },
  { label: "Piernas", icon: "directions_run", to: "/piernas" },
  { label: "Pecho", icon: "favorite", to: "/pecho" },
]

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const goTo = (to) => {
  leftDrawerOpen.value = false
  router.push(to)
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated class="bg-red-8 text-white">
      <q-toolbar>

        <q-btn flat dense round icon="menu" class="text-white" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          💪 Gym Rat APP
        </q-toolbar-title>

        <q-btn flat dense round icon="login" class="text-white" @click="goTo('/')" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model:model-value="leftDrawerOpen" bordered>
      <q-list padding>
        <q-item-label header>Menú</q-item-label>
        <q-separator />

        <q-item
          v-for="item in menuItems"
          :key="item.to"
          clickable
          :active="route.path === item.to"
          @click="goTo(item.to)"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>