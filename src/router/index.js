import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/layouts/HeroView.vue'
import ProductsView from '@/layouts/ProductsView.vue'
import Login from '@/layouts/Login.vue'
import SignUp from '@/layouts/SignUp.vue'
import Details from '@/layouts/ProductDetails.vue'

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
    path: '/products/:id',
    name: 'products.show',
    component: () => import('@/layouts/ProductDetails.vue'),
    props:(route) => ({id: parseInt(route.params.id)})
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
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Details
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
