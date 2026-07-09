<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const categorias = [
  {
    nombre: "Espalda",
    ruta: "/espalda",
    icono: "fitness_center"
  },
  {
    nombre: "Brazos",
    ruta: "/brazos",
    icono: "sports_gymnastics"
  },
  {
    nombre: "Piernas",
    ruta: "/piernas",
    icono: "directions_run"
  },
  {
    nombre: "Pecho",
    ruta: "/pecho",
    icono: "favorite"
  }
]

const ir = (ruta) => {
  router.push(ruta)
}
</script>

<template>

<q-page class="home">

  <!-- HERO -->

  <section class="hero">

    <!-- MENU -->

    <div class="menu">

      <div class="logo">
        💪 Gym Rat
      </div>

      <div class="links">

        <q-btn flat label="Inicio" />

        <q-btn flat label="Espalda" @click="ir('/espalda')" />

        <q-btn flat label="Brazos" @click="ir('/brazos')" />

        <q-btn flat label="Piernas" @click="ir('/piernas')" />

        <q-btn flat label="Pecho" @click="ir('/pecho')" />

      </div>

    </div>



    <!-- CONTENIDO -->

    <div class="contenido">

      <div class="izquierda">

        <div class="texto1">
          STRONGER
        </div>

        <div class="texto2">
          GYM RAT
        </div>

        <div class="texto3">
          Shape Your Perfect Body
        </div>

        <p>
          Comienza hoy tu transformación física.
          Entrena con disciplina, constancia y alcanza tus objetivos.
        </p>

        <div class="botones">

          <q-btn
            color="amber"
            text-color="black"
            rounded
            label="Comenzar"
            @click="ir('/espalda')"
          />

          <q-btn
            outline
            color="amber"
            rounded
            label="Rutinas"
          />

        </div>

      </div>

      <div class="derecha">

        <!-- AQUÍ VA TU IMAGEN -->

      </div>

    </div>

  </section>



  <!-- TARJETAS -->

  <section class="categorias">

    <div class="titulo">

      Grupos musculares

    </div>

    <div class="cards">

      <q-card
        v-for="item in categorias"
        :key="item.nombre"
        class="card"
        @click="ir(item.ruta)"
      >

        <q-card-section>

          <q-icon
            :name="item.icono"
            size="55px"
            color="amber"
          />

          <div class="nombre">

            {{ item.nombre }}

          </div>

        </q-card-section>

      </q-card>

    </div>

  </section>

</q-page>

</template>

<style scoped>

.home{

background:#090909;
min-height:100vh;
color:white;

}

/* HERO */
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, .72), rgba(0, 0, 0, .72)),
    url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  padding: 35px 70px;
}

/* MENU */

.menu{

display:flex;

justify-content:space-between;

align-items:center;

}

.logo{

font-size:34px;

font-weight:bold;

color:white;

}

.links{

display:flex;

gap:15px;

}

.links .q-btn{

color:white;

font-weight:bold;

}

.links .q-btn:hover{

color:#FFC107;

}

/* CONTENIDO */

.contenido{

display:flex;

justify-content:space-between;

align-items:center;

margin-top:80px;

}

.izquierda{

width:50%;

}

.texto1{

font-size:70px;

font-weight:900;

color:#404040;

letter-spacing:5px;

}

.texto2{

font-size:95px;

font-weight:bold;

color:white;

line-height:90px;

}

.texto3{

font-size:42px;

color:#FFC107;

font-weight:bold;

margin-bottom:20px;

}

p{

font-size:18px;

width:80%;

color:#d6d6d6;

}

.botones{

display:flex;

gap:20px;

margin-top:30px;

}

/* DERECHA */

.derecha{

width:40%;

height:520px;

}

/* CATEGORIAS */

.categorias{

padding:60px;

}

.titulo{

font-size:40px;

font-weight:bold;

margin-bottom:30px;

text-align:center;

}

.cards{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

}

.card{

background:#171717;

color:white;

text-align:center;

padding:25px;

border-radius:20px;

cursor:pointer;

transition:.35s;

border:1px solid #2b2b2b;

}

.card:hover{

transform:translateY(-8px);

background:#202020;

border:1px solid #FFC107;

box-shadow:0 0 25px rgba(255,193,7,.25);

}

.nombre{

margin-top:20px;

font-size:24px;

font-weight:bold;

}

/* RESPONSIVE */

@media(max-width:900px){

.menu{

flex-direction:column;

gap:20px;

}

.contenido{

flex-direction:column;

text-align:center;

}

.izquierda{

width:100%;

}

.texto1{

font-size:45px;

}

.texto2{

font-size:60px;

}

.texto3{

font-size:28px;

}

p{

width:100%;

}

.cards{

grid-template-columns:1fr;

}

}

</style>
