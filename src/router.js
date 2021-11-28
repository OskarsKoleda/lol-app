import {
  createRouter,
  createWebHistory
} from 'vue-router'
import RateLastGame from './pages/lastgame/RateLastGame.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const routes = [{
    path: '/',
    redirect: '/ratelastgame'
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/ratelastgame',
    component: RateLastGame,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/ratelastgame')
  } else {
    next();
  }
});

export default router