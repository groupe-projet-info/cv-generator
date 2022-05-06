import { createWebHistory, createRouter } from "vue-router";
import Login from './frontend/pages/login.vue';
import Logout from './frontend/pages/logout.vue';
import Register from './frontend/pages/register.vue';
const routes = [
  { 
    name: 'login',
    path: '/', 
    component: Login,
  },
  { 
    name: 'logout',
    path: '/logout', 
    component: Logout, 
    props:true 
  },
  { 
    name: 'register',
    path: '/register', 
    component: Register, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;