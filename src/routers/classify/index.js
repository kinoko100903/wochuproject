export default {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/classify'),
    children:[
      // {
      //   path:"/classify",
      //   redirect:"/classify/one"
      // },
      {
        path:'one',
        name:'one',
        component: ()=> import('@/components/classify/one.vue')
      },
      {
        path:'two',
        name:'two',
        component: ()=> import('@/components/classify/two.vue')
      },
      {
        path:'three',
        name:'three',
        component: ()=> import('@/components/classify/three.vue')
      },
      {
        path:'four',
        name:'four',
        component: ()=> import('@/components/classify/four.vue')
      },
      {
        path:'five',
        name:'five',
        component: ()=> import('@/components/classify/five.vue')
      },
      {
        path:'six',
        name:'six',
        component: ()=> import('@/components/classify/six.vue')
      },
      {
        path:'seven',
        name:'seven',
        component: ()=> import('@/components/classify/seven.vue')
      },
      {
        path:'eight',
        name:'eight',
        component: ()=> import('@/components/classify/eight.vue')
      },
      {
        path:'nine',
        name:'nine',
        component: ()=> import('@/components/classify/nine.vue')
      },
      {
        path:'ten',
        name:'ten',
        component: ()=> import('@/components/classify/ten.vue')
      },
      {
        path:'eleven',
        name:'eleven',
        component: ()=> import('@/components/classify/eleven.vue')
      },
      {
        path:'twelve',
        name:'twelve',
        component: ()=> import('@/components/classify/twelve.vue')
      }
    ]
  }