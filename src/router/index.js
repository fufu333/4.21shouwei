// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// 引入组件
import HomePage from '../components/HomePage.vue'
import ProfilePage from '../components/ProfilePage.vue'
import Ceshi from '../components/Ceshi.vue'
import Login from '../components/Login.vue'


// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/ceshi',
    name: 'Ceshi',
    component: Ceshi,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: route => ({ redirect: route.query.redirect })
  }
]

// 创建路由器实例
const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // 如果需要认证且未登录，或者直接尝试访问非登录页面，重定向到登录页
  if (requiresAuth && !isLoggedIn) {
    // 保存原始URL以便登录后重定向
    if (to.name !== 'Login') {
      localStorage.setItem('redirect', JSON.stringify({name: to.name, params: to.params, query: to.query}));
    }
    next({ name: 'Login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
export default router
