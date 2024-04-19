import VueRouter from "vue-router";
import Vue from "vue";
import { authGuard } from "../oauth/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile-user.vue'),
    beforeEnter: authGuard
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
