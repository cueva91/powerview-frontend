<template>
  <div class="flex h-screen">
    <!-- Sidebar siempre visible -->
    <Sidebar />
    
    <!-- Contenido dinámico -->
    <div class="flex-1 p-4 overflow-y-auto bg-gray-100"> <!-- Añadir bg para mejorar contraste -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style>
html, body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  overflow: hidden; /* Evita scroll innecesario en toda la página */
}

#app {
  height: 100vh;
}

.flex-1 {
  height: 100%;
  overflow-y: auto; /* Permite scroll solo si el contenido lo requiere */
  box-sizing: border-box;
  background-color: #f7f7f7; /* Fondo claro para mejorar visibilidad */
}

@media (max-width: 768px) {
  .flex {
    flex-direction: column; /* El sidebar podría ir arriba en pantallas pequeñas */
  }
}
</style>
