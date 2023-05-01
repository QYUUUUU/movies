import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmList from '@/components/FilmList.vue'
import FilmDetails from '@/components/FilmDetails.vue'
import FilmForm from '@/components/FilmForm.vue'
import FilmCreate from '@/components/FilmCreate.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'FilmList', component: FilmList },
  { path: '/movie/:id', name: 'FilmDetails', component: FilmDetails },
  { path: '/movie/:id/edit', name: 'FilmForm', component: FilmForm },
  { path: '/movie/create', name: 'FilmCreate', component: FilmCreate }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  

export default router
