import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Team from '@/pages/Team.vue'
import Pictures from '@/pages/Pictures.vue'
import Boyage from '@/pages/Boyage.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Pictures
  },
  {
    path: '/boyage',
    name: 'Boyage',
    component: Boyage
  },
  {
    path: '/equipe',
    name: "L'équipe",
    component: Team
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Accueil',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
