import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabBar from '../components/UI/TabBar.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../pages/HomePage.vue'),
      },
      {
        path: 'memories',
        component: () => import('../pages/MemoriesPage.vue')
      },
      {
        path: 'addOutline',
        component: () => import('../pages/AddMemoryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('../pages/MemoryDetailsPage.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
