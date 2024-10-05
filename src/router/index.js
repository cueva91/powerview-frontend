// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Informes from '../components/Informes.vue';
import Reportes from '../components/Reportes.vue';

const routes = [
  {
    path: '/informes',
    name: 'Informes',
    component: Informes,
  },
  {
    path: '/reportes',
    name: 'Reportes',
    component: Reportes,
  },
  {
    path: '/',
    redirect: '/informes', // Redirecciona al inicio a 'Informes'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
