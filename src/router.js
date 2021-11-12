import { createRouter, createWebHistory } from 'vue-router'
import RateLastGame from './pages/lastgame/RateLastGame.vue';

const routes = [
  {
    path: '/',
    redirect: '/ratelastgame'
  },
  {
    path: '/ratelastgame',
    component: RateLastGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
