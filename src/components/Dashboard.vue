<template>
  <div class="flex h-screen">
    <!-- Sidebar a la izquierda -->
    <Sidebar />

    <!-- Contenido principal a la derecha -->
    <div class="flex-1 p-4">
      <h1 class="text-3xl font-bold mb-8">Panel de Control</h1>
      
      <!-- Sección de Informes -->
      <router-view />  <!-- Aquí se renderizará la sección de informes -->
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
/* Estilos adicionales para el dashboard si es necesario */
</style>
