import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/layouts/HeroView.vue'
import ProductsView from '@/layouts/ProductsView.vue'
import Login from '@/layouts/Login.vue'
import SignUp from '@/layouts/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
