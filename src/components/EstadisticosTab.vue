<template>
  <div class="h-screen p-1 bg-gray-100 flex flex-col overflow-hidden">
    <!-- Filtros superiores -->
    <div class="flex justify-between items-center mb-1">
      <div class="flex space-x-1 items-center">
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
        <select class="border p-1 rounded-md w-34 h-7 focus:outline-none shadow-sm text-xs text-blue-900">
          <option>Subestación</option>
        </select>
        <select class="border p-1 rounded-md w-40 h-7 focus:outline-none shadow-sm text-xs text-blue-900">
          <option>Nivel de tensión</option>
        </select>
        <select class="border p-1 rounded-md w-20 h-7 focus:outline-none shadow-sm text-xs text-blue-900">
          <option>Bahía</option>
        </select>
      </div>
      <button class="p-1 bg-blue-900 text-white rounded-md text-sm shadow-md text-xs hover:bg-blue-800 transition">
        Filtrar
      </button>
    </div>

    <!-- Contenedor principal con columnas ajustadas al ancho y alto -->
    <div class="flex flex-1 space-x-1 overflow-hidden">
      <!-- Primera columna: Resumen y Novedades -->
      <div class="w-1/4 space-y-1 overflow-auto">
        <div class="grid grid-cols-3 gap-1">
          <div class="bg-white p-1 rounded-md text-center shadow-md">
            <h3 class="text-xs font-semibold text-blue-800">N. de Sub...</h3>
            <p class="text-2xl font-bold text-blue-900">6</p>
          </div>
          <div class="bg-white p-1 rounded-md text-center shadow-md">
            <h3 class="text-xs font-semibold text-blue-800">N. de Bahía</h3>
            <p class="text-2xl font-bold text-blue-900">25</p>
          </div>
          <div class="bg-white p-1 rounded-md text-center shadow-md">
            <h3 class="text-xs font-semibold text-blue-800">N. de Elem...</h3>
            <p class="text-2xl font-bold text-blue-900">18</p>
          </div>
        </div>

        <div class="bg-white p-1 rounded-md shadow-md space-y-1">
          <h3 class="font-semibold text-sm text-blue-800">Novedades</h3>
          <div class="flex justify-around">
            <div class="text-center">
              <p class="text-3xl font-bold text-blue-900">5</p>
              <p class="text-xs text-blue-800">En trámite</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-blue-900">10</p>
              <p class="text-xs text-blue-800">Atendidas</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-xs mb-1 text-blue-800">Últimas acciones</h3>
            <input type="text" placeholder="Buscar" class="w-full p-1 border rounded-md text-xs mb-1 focus:outline-none shadow-sm" />
            <ul class="space-y-1 overflow-auto max-h-80 text-xs">
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 1</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 2</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 3</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 4</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 5</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
              <li class="p-1 bg-gray-50 rounded-md shadow-sm">
                <p class="font-semibold">Última observación - 6</p>
                <p class="text-gray-500">Fecha: 10/03/2023 - Usuario: Lorena Roa</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Segunda columna: Gráficas principales -->
      <div class="flex-1 flex flex-col space-y-1 overflow-auto">
        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-0 text-blue-800">Causas más recurrentes</h3>
          <apexchart type="bar" :options="barChartOptions" :series="barSeries" height="100%" />
        </div>

        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-0 text-blue-800">Subestaciones más afectadas</h3>
          <apexchart type="line" :options="lineChartOptions" :series="lineSeries" height="100%" />
        </div>

        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-0 text-blue-800">Tiempo de indisponibilidad en subestaciones (Hrs)</h3>
          <apexchart type="bar" :options="horizontalBarChartOptions" :series="horizontalBarSeries" height="100%" />
        </div>
      </div>

      <!-- Tercera columna: Gráficas de usuarios afectados -->
      <div class="w-1/4 space-y-1 overflow-auto">
        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-1 text-blue-800">Usuarios afectados</h3>
          <apexchart type="donut" :options="donutChartOptions" :series="pieData115kv" height="100%" />
        </div>
        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-1 text-blue-800">Nivel de tensión 14.5 kv</h3>
          <apexchart type="donut" :options="donutChartOptions" :series="pieData145kv" height="100%" />
        </div>
        <div class="bg-white p-2 rounded-md shadow-md flex flex-col justify-center" style="height: 200px;">
          <h3 class="font-semibold text-sm mb-1 text-blue-800">Nivel de tensión 13.8 kv</h3>
          <apexchart type="donut" :options="donutChartOptions" :series="pieData138kv" height="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: "EstadisticosTab",
  components: {
    apexchart: VueApexCharts,
    Datepicker
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      // Opciones del gráfico de barras horizontales (indisponibilidad)
      horizontalBarChartOptions: {
        chart: {
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '60%',
          },
        },
        xaxis: {
          categories: ['Sub 1', 'Sub 2', 'Sub 3', 'Sub 4', 'Sub 5', 'Sub 6'],
        },
        yaxis: {
          title: {
            text: 'Subestaciones',
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + ' hrs';
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40,
        },
        colors: ['#1E3A8A', '#60A5FA'], // Tonos de azul
      },
      horizontalBarSeries: [
        {
          name: 'Operación',
          data: [75, 41, 91, 53, 60, 85],
        },
        {
          name: 'Mantenimiento',
          data: [78, 43, 82, 40, 50, 77],
        },
      ],
      // Opciones del gráfico de Donut (torta)
      donutChartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ['Sub 1', 'Sub 2', 'Sub 3', 'Sub 4', 'Sub 5'],
        colors: ['#1E3A8A', '#60A5FA', '#93C5FD', '#3B82F6', '#2563EB'], // Gama de azules
        legend: {
          position: 'right',
          labels: {
            colors: ['#333'],
            useSeriesColors: false,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex] + "%";
          },
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  },
                },
              },
            },
          },
        },
      },
      pieData115kv: [23.9, 21.8, 18.1, 16.3, 11.6],
      pieData145kv: [23.9, 21.8, 18.1, 16.3, 11.6],
      pieData138kv: [23.9, 21.8, 18.1, 16.3, 11.6],
      // Otras configuraciones de gráficos
      barChartOptions: {
        chart: { type: 'bar' },
        xaxis: { categories: ['Sub 1', 'Sub 2', 'Sub 3', 'Sub 4', 'Sub 5', 'Sub 6'] },
        plotOptions: { bar: { horizontal: false } },
        colors: ['#1E3A8A', '#60A5FA'], // Gama de azules
      },
      barSeries: [
        { name: 'Causa 1', data: [40, 20, 60, 30, 50, 70] },
        { name: 'Causa 2', data: [10, 30, 40, 20, 50, 60] },
      ],
      lineChartOptions: {
        chart: { type: 'line' },
        xaxis: { categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'] },
        colors: ['#1E3A8A', '#60A5FA'],
      },
      lineSeries: [
        { name: 'Sub 1', data: [33, 53, 85, 41, 44, 65, 56, 77, 85] },
        { name: 'Sub 2', data: [53, 35, 55, 61, 64, 45, 76, 67, 75] },
        { name: 'Sub 3', data: [45, 34, 92, 23, 90, 42, 80, 20, 35] },
        { name: 'Sub 4', data: [10, 25, 30, 15, 78, 89, 28, 91, 22] },
      ],
    };
  },
};
</script>

<style scoped>
  .mb-1 {
    margin-bottom: 0.25rem; /* Reduce el margen inferior */
  }
</style>
