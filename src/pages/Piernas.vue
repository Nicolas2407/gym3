<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const mostrarModalVideo = ref(false)
const videoUrlActual = ref("")

const abrirVideo = (urlVideo) => {
  videoUrlActual.value = urlVideo
  mostrarModalVideo.value = true
}

const ejercicios = ref([
  {
    nombre: "Sentadilla Libre",
    imagen: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/aPYCiuiB4Pa", // Sentadilla técnica
    series: 4,
    repeticiones: "8-10",
    descansoOriginal: 120,
    tiempoRestante: 120,
    estado: "inicio",
    intervalo: null,
    descripcion: "El rey de los ejercicios. Construye fuerza masiva en cuádriceps y glúteos."
  },
  {
    nombre: "Prensa Inclinada",
    imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/uPSsojef-0E", // Uso de prensa inclinada
    series: 4,
    repeticiones: "10-15",
    descansoOriginal: 90,
    tiempoRestante: 90,
    estado: "inicio",
    intervalo: null,
    descripcion: "Excelente para mover peso enfocándose en los cuádriceps de forma segura."
  },
  {
    nombre: "Peso Muerto Rumano",
    imagen: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=600&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/DNJya2CBQJ8", // Peso muerto rumano técnico
    series: 4,
    repeticiones: "10-12",
    descansoOriginal: 90,
    tiempoRestante: 90,
    estado: "inicio",
    intervalo: null,
    descripcion: "Fundamental para isquiosurales densos y desarrollo de la cadena posterior."
  },
  {
    nombre: "Elevación de Talones (Prensa)",
    imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/uPSsojef-0E", // Elevación de talones en prensa
    series: 4,
    repeticiones: "15-20",
    descansoOriginal: 60,
    tiempoRestante: 60,
    estado: "inicio",
    intervalo: null,
    descripcion: "Trabajo directo para los gemelos. Mantén tensión en la parte alta."
  }
])

const actualizarDescansoBase = (ejercicio) => {
  const nuevoTiempo = parseInt(ejercicio.descansoOriginal) || 0
  ejercicio.descansoOriginal = nuevoTiempo
  if (ejercicio.estado === 'inicio') {
    ejercicio.tiempoRestante = nuevoTiempo
  }
}

const manejarEntrenamiento = (ejercicio) => {
  if (ejercicio.estado === 'inicio') {
    ejercicio.estado = 'activo'
  } 
  else if (ejercicio.estado === 'activo') {
    ejercicio.estado = 'descanso'
    
    ejercicio.intervalo = setInterval(() => {
      if (ejercicio.tiempoRestante > 0) {
        ejercicio.tiempoRestante--
      } else {
        clearInterval(ejercicio.intervalo)
        ejercicio.estado = 'inicio'
        ejercicio.tiempoRestante = ejercicio.descansoOriginal
        alert(`¡Descanso terminado para ${ejercicio.nombre}! A seguir sufriendo.`)
      }
    }, 1000)
  }
}

const forzarTerminarDescanso = (ejercicio) => {
  clearInterval(ejercicio.intervalo)
  ejercicio.estado = 'inicio'
  ejercicio.tiempoRestante = ejercicio.descansoOriginal
}
</script>

<template>
  <div class="pantalla-gym">
    
    <header class="navbar-gym">
      <div class="nav-logo" @click="router.push('/home')">
        💪 Gym <span class="text-amarillo">Rat</span>
      </div>
      <nav class="nav-links">
        <button class="nav-btn" @click="router.push('/home')">Inicio</button>
        <button class="nav-btn" @click="router.push('/espalda')">Espalda</button>
        <button class="nav-btn" @click="router.push('/brazos')">Brazos</button>
        <button class="nav-btn active">Piernas</button>
        <button class="nav-btn" @click="router.push('/pecho')">Pecho</button>
      </nav>
    </header>
    
    <div class="text-center q-pt-md q-pb-lg mt-navbar">
      <h1 class="titulo-gym">LEG DAY</h1>
      <p class="subtitulo">Fuerza brutal y desarrollo del tren inferior</p>
    </div>

    <div class="grid-ejercicios">
      <div class="tarjeta-gym" v-for="e in ejercicios" :key="e.nombre">
        
        <div class="tarjeta-header">
          <h2 class="ejercicio-nombre">{{ e.nombre }}</h2>
          <p class="ejercicio-descripcion">{{ e.descripcion }}</p>
        </div>

        <div class="row-parametros">
          <div class="col-parametro">
            <span class="label-param">SERIES</span>
            <input type="number" v-model.number="e.series" class="input-editable num-amarillo" min="0" />
          </div>
          <div class="col-parametro">
            <span class="label-param">REPS</span>
            <input type="text" v-model="e.repeticiones" class="input-editable num-amarillo" />
          </div>
          <div class="col-parametro">
            <span class="label-param">REST (s)</span>
            <div v-if="e.estado === 'descanso'" class="timer-display timer-active">
              <span class="valor-param font-mono text-red">{{ e.tiempoRestante }}s</span>
            </div>
            <input v-else type="number" v-model.number="e.descansoOriginal" @input="actualizarDescansoBase(e)" class="input-editable text-white font-mono" min="0" />
          </div>
        </div>

        <div class="contenedor-media" @click="abrirVideo(e.video)">
          <img :src="e.imagen" :alt="e.nombre" class="img-referencia" />
          <div class="overlay-play">
            <div class="circulo-play">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36" height="36">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <button v-if="e.estado === 'inicio'" class="btn-gym btn-iniciar" @click="manejarEntrenamiento(e)">Iniciar Entrenamiento</button>
        <button v-else-if="e.estado === 'activo'" class="btn-gym btn-finalizar" @click="manejarEntrenamiento(e)">Finalizar Entrenamiento</button>
        <button v-else-if="e.estado === 'descanso'" class="btn-gym btn-descanso" @click="forzarTerminarDescanso(e)">Descansando (Saltar {{ e.tiempoRestante }}s)</button>

      </div>
    </div>

    <!-- MODAL DE QUASAR PARA EL VIDEO -->
    <q-dialog v-model="mostrarModalVideo" backdrop-filter="blur(4px)">
      <q-card style="width: 700px; max-width: 90vw; background: #171717; border: 1px solid #e2b356; border-radius: 12px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-white text-weight-bold">Video de Referencia</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="white" />
        </q-card-section>
        <q-card-section class="q-pa-md">
          <div class="contenedor-iframe">
            <iframe 
              v-if="mostrarModalVideo"
              :src="videoUrlActual" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<style scoped>
.pantalla-gym {
  background-color: #121418;
  min-height: 100vh;
  padding: 80px 40px 60px 40px; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #ffffff;
}
.navbar-gym {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 70px;
  background: rgba(18, 20, 24, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
}
.nav-logo {
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 1px;
}
.text-amarillo {
  color: #e2b356;
}
.nav-links {
  display: flex;
  gap: 15px;
}
.nav-btn {
  background: transparent;
  border: none;
  color: #8a8f98;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.nav-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}
.nav-btn.active {
  color: #e2b356;
  background: rgba(226, 179, 86, 0.1);
  border: 1px solid rgba(226, 179, 86, 0.2);
}
.mt-navbar {
  margin-top: 20px;
}
.titulo-gym {
  font-size: 3rem;
  font-weight: 800;
  color: #e2b356;
  margin: 0;
  letter-spacing: 2px;
}
.subtitulo {
  color: #8a8f98;
  font-size: 1.1rem;
  margin-top: 5px;
}
.grid-ejercicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}
.tarjeta-gym {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
}
.tarjeta-header {
  text-align: center;
  margin-bottom: 25px;
}
.ejercicio-nombre {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e2b356;
  margin: 0 0 8px 0;
}
.ejercicio-descripcion {
  color: #a0a5b0;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.4;
  min-height: 40px;
}
.row-parametros {
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 15px 10px;
  margin-bottom: 25px;
}
.col-parametro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}
.label-param {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6c727e;
  letter-spacing: 1px;
  margin-bottom: 4px;
}
.input-editable {
  background: transparent;
  border: none;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 2px 0;
  outline: none;
}
.input-editable:focus {
  border-bottom: 1px solid #e2b356;
}
.num-amarillo {
  color: #e2b356;
}
.font-mono {
  font-family: monospace;
}
.text-red {
  color: #ef4444;
}
.timer-display {
  padding: 2px 8px;
  border-radius: 6px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timer-active {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
}
.contenedor-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
}
.img-referencia {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.overlay-play {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
}
.circulo-play {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 70px; height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor-iframe {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.contenedor-iframe iframe {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border-radius: 8px;
}
.btn-gym {
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s ease, transform 0.2s ease;
}
.btn-iniciar {
  background: #e2b356;
  color: #121418;
}
.btn-finalizar {
  background: #ef4444;
  color: #ffffff;
}
.btn-descanso {
  background: #272d37;
  color: #8a8f98;
}
</style>