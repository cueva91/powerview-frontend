<template>
  <div>
    <!-- Barra de pestañas -->
    <div class="tabs flex justify-start border-b-2">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="currentTab = tab"
        :class="currentTab === tab ? 'border-b-4 border-blue-600' : ''"
        class="py-2 px-4"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Contenido dinámico de acuerdo a la pestaña seleccionada -->
    <div class="tab-content">
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import EstadisticosTab from './EstadisticosTab.vue';
import CargaDiariaTab from './CargaDiariaTab.vue';
import EventosDiariosTab from './EventosDiariosTab.vue';
import EntregaTurnoTab from './EntregaTurnoTab.vue';

export default {
  data() {
    return {
      currentTab: 'Estadísticos',  // Pestaña predeterminada
      tabs: ['Estadísticos', 'Carga diaria', 'Eventos diarios', 'Entrega de turno'],  // Lista de pestañas
    };
  },
  computed: {
    currentTabComponent() {
      // Devuelve el componente correspondiente a la pestaña actual
      switch (this.currentTab) {
        case 'Estadísticos':
          return EstadisticosTab;
        case 'Carga diaria':
          return CargaDiariaTab;
        case 'Eventos diarios':
          return EventosDiariosTab;
        case 'Entrega de turno':
          return EntregaTurnoTab;
        default:
          return null;
      }
    }
  }
};
</script>

<style scoped>
.tabs button {
  transition: background-color 0.3s;
}
.tabs button:hover {
  background-color: #f3f3f3;
}
</style>
