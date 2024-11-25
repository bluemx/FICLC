var thecalendario = {
    '4 de Diciembre': [
        { id: 1, titulo: 'Evento de apertura', hora: '18:30 hrs.', lugar: 'Apertura puertas. Crania: Marina Puerto, Poblado La Playa, 23403 San José del Cabo', detalles: '19:30 hrs. Bienvenida', img: 'eventodeapertura.webp', link:'/eventoapertura.html' },
        { id: 1, titulo: 'Proyección Better Man', hora: '20:00 hrs.', lugar: 'Crania: Marina Puerto, Poblado La Playa, 23403 San José del Cabo', img: 'betterman.webp', link:'/eventoapertura.html' }
    ],
    '5 de Diciembre': [
        { id: 2, titulo: 'La raya', hora: '15:00 hrs.', lugar: 'Sala 1 Cinemex Puerto Paraíso', img: 'laraya.webp', link:'/em-laraya.html' },
        { id: 3, titulo: 'Nómadas de la 57', hora: '16:30 hrs.', lugar: 'Sala 3 Cinemex Puerto Paraíso', img: 'nomadas57.webp', link: 'em-nomadasdela57.html' },
        { id: 4, titulo: 'Conversatorio México: un cine sin fronteras', hora: '16:00 hrs.', lugar: 'Sala 4 - Cinemex Puerto Paraíso', img: 'conversatoriocinesinfronteras.webp' },
        { id: 5, titulo: 'Sujo', hora: '18:00 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'sujo.webp', link: 'em-sujo.html' },
        { id: 6, titulo: 'El Jockey', hora: '19:00 hrs.', lugar: 'Sala 4 - Cinemex Puerto Paraíso', img: 'eljockey.webp', link: 'em-eljockey.html'},
        { id: 7, titulo: 'Corina', hora: '20:30 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'corina.webp', link: 'em-corina.html' }
    ],
    '6 de Diciembre': [
        { id: 8, titulo: 'Sujo', hora: '14:45 hrs.', lugar: 'Sala 4 - Cinemex Puerto Paraíso', img: 'sujo.webp', link: 'em-sujo.html' },
        { id: 9, titulo: 'No nos moverán', hora: '17:00 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'nonosmoveran.webp', link: 'em-nonosmoveran.html' },
        { id: 10, titulo: 'Limonov: The Ballad of Eddie', hora: '17:00 hrs.', lugar: 'Hotel El Ganzo (Jetty) - Tiburón s/n, La Playita San José del Cabo', detalles: '18:00 hrs. - Proyección Limonov: The Ballad of Eddie', img: 'limonov.webp' },
        { id: 11, titulo: 'Una historia de amor y guerra', hora: '19:00 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'unahistoriadeamoryguerra.webp', link:'/em-hisamoryguerra.html' },
        { id: 12, titulo: 'Un cuento de pescadores', hora: '21:00 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'uncuentodepescadores.webp', link: 'em-uncuentodepescadores.html' }
    ],
    '7 de Diciembre': [
        { id: 13, titulo: 'Corina', hora: '12:30 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', img: 'corina.webp', link: 'em-corina.html' },
        { id: 14, titulo: 'El Jockey', hora: '14:00 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', img: 'eljockey.webp', link: 'em-eljockey.html' },
        { id: 15, titulo: 'Conversatorio Cine expandido: audiencias diversas en la era digital', hora: '15:00 hrs.', lugar: 'Sala 4 - Cinemex Puerto Paraíso', img: 'conversatoriocineexpandido.webp' },
        { id: 16, titulo: 'El ladrón de perros', hora: '15:45 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'elladrondeperros.webp', link: 'em-elladrondeperros.html' },
        { id: 17, titulo: 'La raya', hora: '17:30 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'laraya.webp', link:'/em-laraya.html' },
        { id: 18, titulo: 'Nómadas de la 57', hora: '18:00 hrs.', lugar: 'Plaza Mijares', img: 'nomadas57.webp', link: 'em-nomadasdela57.html' },
        { id: 19, titulo: 'Animal | Humano', hora: '19:15 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'animalhumano.webp', link: 'em-animalhumano.html' },
        { id: 20, titulo: 'Tesis sobre una domesticación', hora: '20:00 hrs.', lugar: 'Sala 4 - Cinemex Puerto Paraíso', detalles: 'Q&A', img: 'tesissobreunadomesticacion.webp' },
        { id: 21, titulo: 'Evento de clausura', hora: '18:30 hrs.', lugar: 'Apertura puertas. Jardín Escultórico Puerto Los Cabos: San José del Cabo', detalles: '19:30 hrs. Ceremonia de clausura', img: 'eventodeclausura.webp', link: 'eventoclausura.html' },
        { id: 21, titulo: 'Proyección Maria', hora: '20:00 hrs.', lugar: 'Jardín Escultórico Puerto Los Cabos: San José del Cabo', img: 'maria.webp', link: 'eventoclausura.html' }
    ],
    '8 de Diciembre': [
        { id: 22, titulo: 'Una historia de amor y guerra', hora: '12:30 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', img: 'unahistoriadeamoryguerra.webp', link:'/em-hisamoryguerra.html' },
        { id: 23, titulo: 'El ladrón de perros', hora: '14:30 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', img: 'elladrondeperros.webp', link: 'em-elladrondeperros.html' },
        { id: 24, titulo: 'Animal | Humano', hora: '16:00 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', img: 'animalhumano.webp', link: 'em-animalhumano.html' },
        { id: 25, titulo: 'Limonov: The Ballad of Eddie', hora: '17:00 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', img: 'limonov.webp' },
        { id: 26, titulo: 'No nos moverán', hora: '19:15 hrs.', lugar: 'Sala 1 - Cinemex Puerto Paraíso', img: 'nonosmoveran.webp', link: 'em-nonosmoveran.html' },
        { id: 27, titulo: 'Un cuento de pescadores', hora: '20:30 hrs.', lugar: 'Sala 3 - Cinemex Puerto Paraíso', img: 'uncuentodepescadores.webp', link: 'em-uncuentodepescadores.html' }
    ]
}





// Definir el web component
class CalendarioFestival extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>
        
        #calendario-festival {
          background-image: url(https://news.loscabosiff.org/wp-content/calendarioFestival/bg.jpg);
          background-size: cover;
        }
        .eventoCard:nth-child(1) .imgEventoCard, .eventoCard:nth-child(5) .imgEventoCard, 
        .eventoCard:nth-child(9) .imgEventoCard, .eventoCard:nth-child(13) .imgEventoCard {
          border-left: 16px solid #bf5c4c;
        }
        .eventoCard:nth-child(2) .imgEventoCard, .eventoCard:nth-child(6) .imgEventoCard, 
        .eventoCard:nth-child(10) .imgEventoCard, .eventoCard:nth-child(14) .imgEventoCard {
          border-left: 16px solid #867f5a;
        }
        .eventoCard:nth-child(3) .imgEventoCard, .eventoCard:nth-child(7) .imgEventoCard, 
        .eventoCard:nth-child(11) .imgEventoCard, .eventoCard:nth-child(15) .imgEventoCard {
          border-left: 16px solid #dc923c;
        }
        .eventoCard:nth-child(4) .imgEventoCard, .eventoCard:nth-child(8) .imgEventoCard, 
        .eventoCard:nth-child(12) .imgEventoCard, .eventoCard:nth-child(16) .imgEventoCard {
          border-left: 16px solid #4084b3;
        }
        /* Fade transition */
        .fade-enter-active, .fade-leave-active {
          transition: opacity 0.5s ease;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
        

      </style>
        <div id="calendario-festival" class="container py-5 px-3 bg-light rounded shadow-lg">
    <div class="mx-auto" style="max-width: 64rem;">
      <!-- Botones de categorías -->
      <div class="d-flex flex-column flex-sm-row justify-content-between my-3 gap-3 flex-wrap">
        <a href="/eventoapertura.html" class="btn text-white" style="background-color: #bf5c4c;">Evento de apertura</a>
        <a href="#encuadresmexicanos" class="btn text-white" style="background-color: #dc923c;">Encuadres mexicanos</a>
        <a href="/eventoclausura.html" class="btn text-white" style="background-color: #857e5a;">Evento de clausura</a>
      </div>
  
      <div class="row my-5">
      <div class="col-12 col-md-6 mb-4">
        <h1 class="h2 fw-semibold">CALENDARIO<br>DEL FESTIVAL</h1>
      </div>

      <!-- Navegación de días -->
      <div class="col-12 col-md-6 d-flex justify-content-between mb-4">
        <button v-for="dia in dias" :key="dia.fecha" @click="seleccionarDia(dia)"
          style="background: #d37254;"
          class="btn text-white px-3 py-1"
          :class="{'': dia.seleccionado, 'bg-dark': !dia.seleccionado}">
          <div>{{ dia.nombre }}</div>
          <div class="">{{ dia.numero }}</div>
        </button>
      </div>
    </div>
  
              <!-- Lista de eventos del día seleccionado -->
              <transition name="fade" mode="out-in">
                  <div v-if="eventosDia.length > 0" :key="diaSeleccionado.fecha">
                      <h2 class="fs-3 fw-semibold mb-4">{{ diaSeleccionado.fecha.toUpperCase() }}</h2>
  
                      <div class="row">
                          <div v-for="evento in eventosDia" :key="evento.id" class="eventoCard col-12 col-md-6">
                              <div :class="evento.link?'cursor-pointer':''" @click="navigateToLink(evento)" class="imgEventoCard">
                                <img :src="\`https://news.loscabosiff.org/wp-content/calendarioFestival/cards/\${evento.img}\`" class="img-fluid" />
                              </div>
                              <h3 class="fs-4  fw-semibold mt-2 uppercase">{{ evento.titulo }}</h3>
                              <p class="fs-4 fw-semibold mt-4 uppercase">{{ evento.hora }}</p>
                              <p class="fs-5">{{ evento.lugar }}</p>
                              <p class="fs-6 text-muted" v-if="evento.detalles">{{ evento.detalles }}</p>
                          </div>
                      </div>
                  </div>
              </transition>
          </div>
        </div>
      `;
  
      // Cargar Vue y Tailwind solo si no están cargados
      if (!window.Vue) {
        const vueScript = document.createElement("script");
        vueScript.src = "https://unpkg.com/vue@3/dist/vue.global.js";
        document.head.appendChild(vueScript);
      }
  
      /*
      if (!window.tailwind) {
        const tailwindScript = document.createElement("script");
        tailwindScript.src = "https://cdn.tailwindcss.com";
        document.head.appendChild(tailwindScript);
      }
        */
  
      // Inicializar Vue después de que se cargue
      const initVue = () => {
        if (window.Vue && window.Vue.createApp) {
            const { createApp } = Vue;

            createApp({
              data() {
                return {
                  // Días de la semana con selección
                  dias: [
                    { nombre: 'MIE', numero: '4', fecha: '4 de Diciembre', seleccionado: true },
                    { nombre: 'JUE', numero: '5', fecha: '5 de Diciembre', seleccionado: false },
                    { nombre: 'VIE', numero: '6', fecha: '6 de Diciembre', seleccionado: false },
                    { nombre: 'SAB', numero: '7', fecha: '7 de Diciembre', seleccionado: false },
                    { nombre: 'DOM', numero: '8', fecha: '8 de Diciembre', seleccionado: false }
                  ],
                  diaSeleccionado: { fecha: '4 de Diciembre' },
                  calendario: thecalendario
                };
              },
              computed: {
                // Obtener eventos del día seleccionado
                eventosDia() {
                  return this.calendario[this.diaSeleccionado.fecha] || [];
                }
              },
              methods: {
                navigateToLink(item){
                    if(item.link){
                        window.location.href = item.link
                    }
                },
                seleccionarDia(dia) {
                  // Marcar el día seleccionado y actualizar la lista de eventos
                  this.dias.forEach(d => d.seleccionado = false);
                  dia.seleccionado = true;
                  this.diaSeleccionado = dia;
                }
              }
            }).mount('#calendario-festival');
        } else {
          setTimeout(initVue, 50); // Intentar de nuevo si Vue no se ha cargado aún
        }
      };
  
      initVue();
    }
  }
  
  // Registrar el web component
  customElements.define("calendario-festival", CalendarioFestival);