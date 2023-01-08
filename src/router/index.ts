import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import localCache from '@/utils/cache';
import { useUserStore } from '@/store/user/user';
import mapMenusToRouter from './mapMenusToRouter';

const routes: Array<RouteRecordRaw> = [
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
        path: '/',
        name: 'Index',
        redirect: {
            name: 'Main',
        },
        component: () => import('@/components/layout/Layout.vue'),
        children: [],
    },
    //缺省
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/404/404.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
//hasInitAuth刷新判断
let hasInitAuth = true;
router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
        const token = localCache.getCache('token');
        if (!token) {
            next({ path: '/login' });
        } else {
            if (hasInitAuth) {
                const userStore = useUserStore();
                mapMenusToRouter(userStore.userMenus);
                hasInitAuth = false;
                next({ path: userStore.currRouteUrl });
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;
