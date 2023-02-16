import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabBar from '../components/UI/TabBar.vue';
import MemoryDetailsPage from '../pages/MemoryDetailsPage.vue';

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
        path: 'add',
        component: () => import('../pages/AddMemoryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('../pages/SearchPage.vue'),
      },
    ]
  },
  {
    path: '/memories/:id',
    component: MemoryDetailsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
