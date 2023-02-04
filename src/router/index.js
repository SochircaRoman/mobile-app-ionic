import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';
import MemoryDetails from '../pages/MemoryDetailsPage.vue';
import AddMemoryPage from '../pages/AddMemoryPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: MemoryDetails
  },
  {
    path: '/memories/add',
    component: AddMemoryPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
