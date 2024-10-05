<template>
  <div class="h-screen p-2 bg-gray-100 flex flex-col overflow-hidden">
    <!-- Filtros superiores -->
    <div class="flex justify-between items-center mb-2">
      <div class="flex space-x-2">
        <!-- Filtros de la tabla -->
        <select class="border p-1 rounded-md w-20 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Caso</option>
        </select>
        <select class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Subestación</option>
        </select>
        <select class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Zona</option>
        </select>
        <select class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Nivel de tensión</option>
        </select>
        <select class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Bahía</option>
        </select>
        <input type="date" class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-xs" />
        <input type="date" class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-xs" />
        <select class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-blue-900 text-xs">
          <option>Duración</option>
        </select>
        <input type="text" placeholder="Usuarios" class="border p-1 rounded-md w-28 h-8 focus:outline-none shadow-sm text-xs">
      </div>
      <button class="p-1 bg-blue-900 text-white rounded-md text-xs shadow-md hover:bg-blue-800 transition">
        Filtrar
      </button>
    </div>

    <!-- Tabla de eventos -->
    <div class="overflow-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white text-xs">
        <thead class="bg-blue-50">
          <tr>
            <th class="w-12 p-2 text-left">Caso</th>
            <th class="w-28 p-2 text-left">Subestación</th>
            <th class="w-28 p-2 text-left">Zona</th>
            <th class="w-28 p-2 text-left">Nivel de tensión</th>
            <th class="w-28 p-2 text-left">Bahía</th>
            <th class="w-36 p-2 text-left">Fecha inicial</th>
            <th class="w-36 p-2 text-left">Fecha final</th>
            <th class="w-20 p-2 text-left">Duración</th>
            <th class="w-20 p-2 text-left">Usuarios</th>
            <th class="w-28 p-2 text-left">Elemento</th>
            <th class="w-20 p-2 text-left">Código</th>
            <th class="w-36 p-2 text-left">Causa del evento</th>
            <th class="w-64 p-2 text-left">Descripción</th>
            <th class="w-28 p-2 text-left">Clasificación</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="(evento, index) in eventos" :key="index" class="border-t">
            <td class="p-2">{{ evento.caso }}</td>
            <td class="p-2">{{ evento.subestacion }}</td>
            <td class="p-2">{{ evento.zona }}</td>
            <td class="p-2">{{ evento.nivelTension }}</td>
            <td class="p-2">{{ evento.bahia }}</td>
            <td class="p-2">{{ evento.fechaInicial }}</td>
            <td class="p-2">{{ evento.fechaFinal }}</td>
            <td class="p-2">{{ evento.duracion }}</td>
            <td class="p-2">{{ evento.usuarios }}</td>
            <td class="p-2">{{ evento.elemento }}</td>
            <td class="p-2">{{ evento.codigo }}</td>
            <td class="p-2">{{ evento.causaEvento }}</td>
            <td class="p-2">{{ evento.descripcion }}</td>
            <td class="p-2">{{ evento.clasificacion }}</td>
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
      eventos: [
        {
          caso: 1,
          subestacion: 'Subestación 1',
          zona: 'Zona 1',
          nivelTension: 115,
          bahia: 'Bahía 4',
          fechaInicial: '15/08/2023 22:45:10',
          fechaFinal: '16/08/2023 18:21:30',
          duracion: '04:20:30',
          usuarios: 156,
          elemento: 'Transformador',
          codigo: 30,
          causaEvento: 'Condiciones atmosféricas',
          descripcion: 'Apertura generada por la acción de condiciones atmosféricas.',
          clasificacion: 'No programada',
        },
        {
          caso: 2,
          subestacion: 'Subestación 4',
          zona: 'Zona 4',
          nivelTension: 34.5,
          bahia: 'Bahía 2',
          fechaInicial: '29/08/2023 22:45:10',
          fechaFinal: '30/08/2023 18:21:30',
          duracion: '03:40:20',
          usuarios: 200,
          elemento: 'Línea',
          codigo: 40,
          causaEvento: 'Mantenimiento programado',
          descripcion: 'Apertura por trabajos de mantenimiento preventivo en las líneas.',
          clasificacion: 'Programada',
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Ajuste del padding y tamaños para mayor compactación */
table th, table td {
  padding: 0.3rem; /* Reduce el padding para hacer el contenido más compacto */
  text-align: left;
}

select, input {
  font-size: 0.75rem; /* Reduce el tamaño de fuente */
  padding: 0.2rem 0.5rem; /* Padding más pequeño para los inputs y selects */
}

button {
  padding: 0.3rem 1rem; /* Botón más compacto */
  font-size: 0.75rem; /* Tamaño de fuente reducido */
}
</style>
