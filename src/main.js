import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importamos el enrutador

import './main.css';  // Si tienes Tailwind configurado aquí

createApp(App)
  .use(router)  // Usamos el enrutador
  .mount('#app');
