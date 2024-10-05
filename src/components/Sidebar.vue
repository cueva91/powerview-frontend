<template>
  <div class="bg-custom-blue h-screen text-white w-60 p-4 flex flex-col justify-between">
    <!-- Logo SVG y título del panel -->
    <div>
      <!-- Incluir el logo SVG en lugar del texto -->
      <img src="@/assets/logo-axon.svg" alt="Axon Group Logo" class="mb-8 w-32 h-auto"> <!-- Ajusta el tamaño según sea necesario -->
      <!-- Lista de navegación -->
      <ul class="space-y-4">
        <li>
          <button @click="$router.push('/informes')" class="w-full text-left hover:bg-blue-700 p-2 rounded-md text-xs">
            Informes
          </button>
        </li>
        <li>
          <button @click="$router.push('/reportes')" class="w-full text-left hover:bg-blue-700 p-2 rounded-md text-xs">
            Reportes
          </button>
        </li>
        <!-- Más secciones aquí -->
      </ul>
    </div>

    <!-- Información de usuario y opciones -->
    <div>
      <div class="flex items-center space-x-4 mb-6">
        <!-- Icono de usuario (puedes agregar una imagen o icono) -->
        <span class="bg-gray-500 w-8 h-8 rounded-full"></span>
        <span class="text-xs">Andrés Duarte</span>
      </div>
      <button @click="handleLogout" class="w-full text-left hover:bg-red-700 bg-red-600 p-2 rounded-md text-xs">
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    handleLogout() {
      console.log('Cerrando sesión...');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.bg-custom-blue {
  background-color: #00135b; /* Aplicar el color personalizado */
}
</style>
