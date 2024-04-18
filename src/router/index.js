import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
   path: '/', 
   name:'Home',
   component: () => import('../views/Home.vue')
  },
  {
    path:'/steping',
    name:'Steping Form',
    component:()=>import('../views/Steping.vue'),
    redirect:{name: 'Step One'},
    children:[
      {
        path:'step-one',
        name:'Step One',
        meta:{
          description:'Rincian Data Pemohon Sertifikasi'
        },
        component:()=>import('../components/form/formOne.vue')
       },
       {
        path:'step-two',
        name:'Step Two',
        meta:{
          description:'Data Pekerjaan Sekarang'
        },
        component:()=>import('../components/form/formTwo.vue'),

       },
       {
        path:'step-three',
        name:'Step Three',
        meta:{
          description:'Data Sertifikasi'
        },
        component:()=>import('../components/form/formThree.vue')
       },
       {
        path:'thanks',
        name:'Thanks',
        component:()=>import('../components/form/thanks.vue')
       }
    ],    
  },
  {
    path:'/table',
    name:'Data Table',
    component:()=>import('../views/Table.vue')
  }
]
const router = createRouter({
 // history: createMemoryHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
