import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/login/Login.vue'),
    },
    {
        path: '/main',
        name: 'Main',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/main/main.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    if (to.path !== '/login') {
        const token = localCache.getCache('token');
        if (!token) {
            return '/login';
        }
    }
});

export default router;
