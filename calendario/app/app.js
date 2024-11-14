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
        seleccionarDia(dia) {
          // Marcar el día seleccionado y actualizar la lista de eventos
          this.dias.forEach(d => d.seleccionado = false);
          dia.seleccionado = true;
          this.diaSeleccionado = dia;
        }
      }
    }).mount('#calendario-festival');