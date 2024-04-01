import { createRouter, createWebHistory } from 'vue-router'
import InvestmentTerms from '../views/InvestmentTermsView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/investments',
      name: 'investments',
      component: InvestmentTerms
    }
  ]
})

export default router
