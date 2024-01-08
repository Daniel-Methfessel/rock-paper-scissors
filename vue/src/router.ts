// https://stackblitz.com/edit/vue3-vite-router-typescript-starter?file=src%2FApp.vue,src%2Frouter.ts
import { createRouter, createWebHistory } from 'vue-router'
import TheAbout from '@/components/TheAbout.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TheAbout,
    },
    {
      path: '/play',
      component: () => import('@/components/TheRockPaperScissors.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/components/NotFound.vue'),
    },
  ],
})