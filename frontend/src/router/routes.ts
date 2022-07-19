import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const ProductDetail = () => import('../views/ProductDetail.vue');
const PageNotFound = () => import('../views/PageNotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      return localStorage.getItem('user') ? next('/') : next();
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      return localStorage.getItem('user') ? next('/') : next();
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    props: true,
    component: ProductDetail
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  }
});

export default router;
