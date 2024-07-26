import { createRouter, createWebHistory } from 'vue-router';
import BikeView from '@/views/01BikeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BikeView
    }
  ]
});

export default router;
