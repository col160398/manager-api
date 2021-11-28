import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Middlewares from '../middlewares'
import Admin from '../layouts/Admin.vue'
import ManagerCustomer from '../views/admin/ManagerCustomer.vue'
import EditCustomer from '../views/admin/EditCustomer.vue'

const routes = [
  {
    path:'/login',
    name: 'Login',
    component: Login,
    meta:{
      middleware: [Middlewares.guest],
      title: 'Đăng nhập'
    }
  },
  {
    path: "/",
    redirect: "/manager-customer",
    name: "Home",
    component: Admin,
    meta:{
      middleware: [Middlewares.auth],
      title: 'Quản lý khách hàng'
    },
    children: [
      {
        path: "/manager-customer",
        name:"ManagerCustomer",
        component: ManagerCustomer,
      },
      {
        path: "/edit-customer/:id",
        name:"EditCustomer",
        component: EditCustomer,
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
function nextCheck(context,middleware,index){
  const nextMiddleware =middleware[index];
  if(!nextMiddleware) return context.next;
  return (...parameters)=>{
      context.next(...parameters);
      const nextMidd = nextCheck(context,middleware,index+1);
      nextMiddleware({...context,nextMidd});
  }
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // to and from are both route objects. must call `next`.
  if(to.meta.middleware){
      const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
      const ctx = {
          from,
          next,
          router,
          to
      }
      const nextMiddleware = nextCheck(ctx,middleware,1);
      return middleware[0]({...ctx,nextMiddleware});
  }
  return next();
})
export default router
