import { RouteRecordRaw } from 'vue-router';
export const allRouterArr: RouteRecordRaw[] = [
    {
        path: 'main',
        name: 'Main',
        component: () => import('@/pages/main/Main.vue'),
    },
    {
        path: 'analysis',
        name: 'Analysis',
        redirect: {
            name: 'Dashboard',
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () =>
                    import('@/pages/analysis/dashboard/Dashboard.vue'),
            },
            {
                path: 'overview',
                name: 'Overview',
                component: () =>
                    import('@/pages/analysis/overview/Overview.vue'),
            },
        ],
    },
    {
        path: 'product',
        name: 'Product',
        redirect: {
            name: 'category',
        },
        children: [
            {
                path: 'category',
                name: 'Category',
                component: () =>
                    import('@/pages/product/category/Category.vue'),
            },
            {
                path: 'goods',
                name: 'Goods',
                component: () => import('@/pages/product/goods/Goods.vue'),
            },
        ],
    },
    {
        path: 'story',
        name: 'Story',
        redirect: {
            name: 'Chat',
        },
        children: [
            {
                path: 'chat',
                name: 'Chat',
                component: () => import('@/pages/story/chat/Chat.vue'),
            },
            {
                path: 'list',
                name: 'List',
                component: () => import('@/pages/story/list/List.vue'),
            },
        ],
    },
    {
        path: 'system',
        name: 'system',
        redirect: {
            name: 'Department',
        },
        children: [
            {
                path: 'department',
                name: 'Department',
                component: () =>
                    import('@/pages/system/department/Department.vue'),
            },
            {
                path: 'menu',
                name: 'Menu',
                component: () => import('@/pages/system/menu/Menu.vue'),
            },
            {
                path: 'role',
                name: 'Role',
                component: () => import('@/pages/system/role/Role.vue'),
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('@/pages/system/user/User.vue'),
            },
        ],
    },
];
