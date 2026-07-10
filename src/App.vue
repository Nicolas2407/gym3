<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const leftDrawerOpen = ref(false);

const route = useRoute();
const router = useRouter();

const menuItems = [
  { label: "Inicio", icon: "home", to: "/home" },
  { label: "Espalda", icon: "fitness_center", to: "/espalda" },
  { label: "Brazos", icon: "sports_gymnastics", to: "/brazos" },
  { label: "Piernas", icon: "directions_run", to: "/piernas" },
  { label: "Pecho", icon: "favorite", to: "/pecho" },
];

// Oculta el menú en el login
const mostrarLayout = computed(() => route.path !== "/");

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const goTo = (to) => {
  leftDrawerOpen.value = false;
  router.push(to);
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <q-header
      v-if="mostrarLayout"
      elevated
      class="bg-red-8 text-white"
    >
      <q-toolbar>

        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          💪 Gym Rat APP
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="logout"
          @click="goTo('/')"
        />

      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-if="mostrarLayout"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list padding>

        <q-item-label header>
          Menú
        </q-item-label>

        <q-separator />

        <q-item
          v-for="item in menuItems"
          :key="item.to"
          clickable
          :active="route.path === item.to"
          @click="goTo(item.to)"
        >

          <q-item-section avatar>
            <q-icon :name="item.icon"/>
          </q-item-section>

          <q-item-section>
            {{ item.label }}
          </q-item-section>

        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>