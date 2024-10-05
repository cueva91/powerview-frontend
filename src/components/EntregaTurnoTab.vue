<template>
  <div class="h-screen p-4 bg-gray-100 flex flex-col">
    <!-- Filtros superiores -->
    <div class="flex justify-between items-center mb-2">
      <div class="flex space-x-2 items-center">
        <!-- Etiqueta de "Tiempo" y selectores de fecha -->
        <label class="text-blue-900 font-medium text-xs">Tiempo:</label>
        <input 
          type="datetime-local" 
          v-model="startDate" 
          class="rounded-md w-36 h-6 focus:outline-none shadow-sm text-xs" 
        />
        <input 
          type="datetime-local" 
          v-model="endDate" 
          class="rounded-md w-36 h-6 focus:outline-none shadow-sm text-xs" 
        />
        <select class="border p-1 rounded-md w-34 h-7 focus:outline-none shadow-sm text-blue-900">
          <option>Subestación</option>
        </select>
        <select class="border p-1 rounded-md w-40 h-7 focus:outline-none shadow-sm text-blue-900">
          <option>Nivel de tensión</option>
        </select>
        <select class="border p-1 rounded-md w-34 h-7 focus:outline-none shadow-sm text-blue-900">
          <option>Bahía</option>
        </select>
      </div>
      <button class="p-1 bg-blue-900 text-white rounded-md text-sm shadow-md hover:bg-blue-800 transition">
        Filtrar
      </button>
    </div>

    <!-- Contenedor principal -->
    <div class="overflow-auto">
      <table class="min-w-full bg-white text-xs shadow-md rounded-md">
        <thead>
          <tr class="bg-blue-50 text-blue-900">
            <th class="px-4 py-2 border">Fecha inicial</th>
            <th class="px-4 py-2 border">Usuario inicial</th>
            <th class="px-4 py-2 border">Fecha final</th>
            <th class="px-4 py-2 border">Usuario final</th>
            <th class="px-4 py-2 border">Subestación</th>
            <th class="px-4 py-2 border">Zona</th>
            <th class="px-4 py-2 border">Nivel de tensión</th>
            <th class="px-4 py-2 border">Bahía</th>
            <th class="px-4 py-2 border">Elemento</th>
            <th class="px-4 py-2 border">Novedad</th>
            <th class="px-4 py-2 border">Comentarios inicio</th>
            <th class="px-4 py-2 border">Comentarios fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td class="px-4 py-2 border">{{ row.fechaInicial }}</td>
            <td class="px-4 py-2 border">{{ row.usuarioInicial }}</td>
            <td class="px-4 py-2 border">{{ row.fechaFinal }}</td>
            <td class="px-4 py-2 border">{{ row.usuarioFinal }}</td>
            <td class="px-4 py-2 border">{{ row.subestacion }}</td>
            <td class="px-4 py-2 border">{{ row.zona }}</td>
            <td class="px-4 py-2 border">{{ row.nivelTension }}</td>
            <td class="px-4 py-2 border">{{ row.bahia }}</td>
            <td class="px-4 py-2 border">{{ row.elemento }}</td>
            <td class="px-4 py-2 border">{{ row.novedad }}</td>
            <td class="px-4 py-2 border">{{ row.comentariosInicio }}</td>
            <td class="px-4 py-2 border">{{ row.comentariosFin }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: "EntregaTurno",
  components: {
    Datepicker
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      tableData: [
        {
          fechaInicial: '29/08/2023 22:45:10',
          usuarioInicial: 'Milton Pérez',
          fechaFinal: '29/08/2023 22:45:10',
          usuarioFinal: 'Carlos Torres',
          subestacion: 'Subestación 4',
          zona: 'Zona 4',
          nivelTension: '34.5',
          bahia: 'Bahía 1',
          elemento: 'Transformador',
          novedad: 'Consignación',
          comentariosInicio: 'No aplican',
          comentariosFin: 'No aplican',
        },
        // Añadir más filas según sea necesario
      ]
    };
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
