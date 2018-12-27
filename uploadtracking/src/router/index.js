import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import testComp from '@/components/TestComp.vue'

Vue.use(VueRouter)

debugger;

const router = new VueRouter({
routes: [
    {
        path: '#/login',
        name: 'login',
        component: Login
    },
    {
        path: '/TestCompp',
        name: 'TestComp',
        component: testComp
    }
]
})

export default router
