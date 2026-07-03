<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const categorias = [
  {
    nombre: "Espalda",
    ruta: "/espalda",
    icono: "fitness_center",
    color: "blue-8",
    descripcion: "Fortalece dorsales, trapecio y zona lumbar.",
    imagen:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
  },
  {
    nombre: "Brazos",
    ruta: "/brazos",
    icono: "sports_gymnastics",
    color: "deep-orange",
    descripcion: "Entrena bíceps, tríceps y antebrazos.",
    imagen:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600",
  },
  {
    nombre: "Piernas",
    ruta: "/piernas",
    icono: "directions_run",
    color: "green",
    descripcion: "Desarrolla fuerza y potencia en piernas.",
    imagen:
      "https://images.unsplash.com/photo-1571019613914-85f342c55f55?w=600",
  },
  {
    nombre: "Pecho",
    ruta: "/pecho",
    icono: "favorite",
    color: "red",
    descripcion: "Trabaja pecho superior, medio e inferior.",
    imagen:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
  },
]
</script>

<template>
  <q-page padding class="bg-grey-10">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">💪 Gym Rat APP</div>
        <div class="text-subtitle2 text-grey-7">Selecciona el grupo muscular que deseas entrenar</div>
      </div>
      <q-btn flat color="red" label="Cerrar sesión" @click="router.push('/')" />
    </div>

    <div class="row q-col-gutter-xl q-pa-lg justify-center">
      <div
        class="col-12 col-sm-6 col-md-3"
        v-for="categoria in categorias"
        :key="categoria.nombre"
      >
        <q-card class="cursor-pointer" @click="router.push(categoria.ruta)">
          <q-img :src="categoria.imagen" height="220px" />

          <q-card-section>
            <div class="row items-center">
              <q-icon :name="categoria.icono" size="40px" :color="categoria.color" />
              <div class="text-h6 q-ml-md">{{ categoria.nombre }}</div>
            </div>
            <div class="text-grey-7 q-mt-md">{{ categoria.descripcion }}</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn color="primary" label="Entrenar" icon="arrow_forward" @click.stop="router.push(categoria.ruta)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>