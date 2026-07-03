<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const iniciarSesion = () => {
  if (email.value && password.value) {
    router.push("/home");
  } else {
    alert("Ingrese el correo y la contraseña.");
  }
};
</script>

<template>
  <q-page class="flex flex-center bg-grey-10">

    <q-card style="width:400px" class="q-pa-lg">

      <q-card-section class="text-center">

        <div class="text-h3">
          💪
        </div>

        <div class="text-h5 text-weight-bold">
          Gym Rat APP
        </div>

        <div class="text-grey">
          Inicia sesión
        </div>

      </q-card-section>

      <q-card-section>

        <q-input
          v-model="email"
          label="Correo"
          outlined
          type="email"
        />

        <q-input
          class="q-mt-md"
          v-model="password"
          label="Contraseña"
          outlined
          type="password"
        />

      </q-card-section>

      <q-card-actions>

        <q-btn
          class="full-width"
          color="red"
          label="Iniciar sesión"
          @click="iniciarSesion"
        />

      </q-card-actions>

    </q-card>

  </q-page>
</template>