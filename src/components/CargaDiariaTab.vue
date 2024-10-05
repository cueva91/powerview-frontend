<template>
  <div class="h-screen p-4 bg-gray-100 flex flex-col">
    <!-- Encabezado -->
    <div class="mb-4">
      <h2 class="text-blue-900 font-semibold text-xl">Carga Diaria</h2>
      <p class="text-gray-600 text-sm">Sube un archivo Excel con las columnas definidas para la carga diaria. Asegúrate de que el archivo tenga la información correcta en las columnas indicadas.</p>
    </div>

    <!-- Área para subir el archivo -->
    <div class="mb-4 p-4 bg-white rounded-md shadow-md">
      <label for="file-upload" class="block text-sm font-medium text-gray-700 mb-2">Seleccionar archivo Excel</label>
      <input 
        type="file" 
        id="file-upload" 
        @change="handleFileUpload" 
        accept=".xlsx, .xls" 
        class="block w-full text-xs text-blue-900 bg-gray-100 rounded-md shadow-sm p-2 border border-gray-300 cursor-pointer focus:outline-none"
      />
      <p v-if="fileName" class="mt-2 text-xs text-gray-500">Archivo seleccionado: {{ fileName }}</p>
    </div>

    <!-- Tabla para ingresar datos o mostrar los datos subidos -->
    <div class="overflow-auto">
      <table class="min-w-full bg-white text-xs shadow-md rounded-md">
        <thead>
          <tr class="bg-blue-50 text-blue-900">
            <th class="px-4 py-2 border">Código</th>
            <th class="px-4 py-2 border">Elemento</th>
            <th class="px-4 py-2 border">Agente</th>
            <th class="px-4 py-2 border">Fecha inicio</th>
            <th class="px-4 py-2 border">Fecha fin</th>
            <th class="px-4 py-2 border">Impacto operativo</th>
            <th class="px-4 py-2 border">Reclamo</th>
            <th class="px-4 py-2 border">Grupo</th>
            <th class="px-4 py-2 border">Suspensión</th>
            <th class="px-4 py-2 border">Secuencia</th>
            <th class="px-4 py-2 border">Comentarios inicio</th>
            <th class="px-4 py-2 border">Comentarios fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td class="px-4 py-2 border"><input v-model="row.codigo" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.elemento" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.agente" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.fechaInicio" type="date" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.fechaFin" type="date" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.impactoOperativo" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.reclamo" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.grupo" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.suspension" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.secuencia" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.comentariosInicio" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
            <td class="px-4 py-2 border"><input v-model="row.comentariosFin" type="text" class="w-full border rounded-md p-1 focus:outline-none"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: '',
      tableData: [
        { codigo: '', elemento: '', agente: '', fechaInicio: '', fechaFin: '', impactoOperativo: '', reclamo: '', grupo: '', suspension: '', secuencia: '', comentariosInicio: '', comentariosFin: '' },
        // Agrega más filas vacías o usa datos cargados
      ]
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.fileName = file ? file.name : '';
      // Aquí puedes agregar lógica para procesar el archivo Excel si es necesario
    },
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
