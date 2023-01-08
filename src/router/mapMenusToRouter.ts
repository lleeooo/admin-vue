import { allRouterArr } from './routerList';
import { RouteRecordRaw } from 'vue-router';
import router from '@/router';
import { splitUrl } from '@/utils/utils';

//注意：localStorage 不能存储component，所以不能直接存储筛选好后的动态路由数组， 需要再次执行mapMenusToRouter方法 从menu数据中筛选出对应的动态路由
const mapMenusToRouter = (menus: any[]): void => {
    //最后需要添加的路由
    const selectRouter: RouteRecordRaw[] = [];

    for (const menu of menus) {
        const sUrl = splitUrl(menu.url);
        //根据menu找到对应的路由配置
        const route = allRouterArr.find((item) => item.path === sUrl);
        //未找到配置直接抛出异常中断
        if (!route) throw `未找到对应的${sUrl}路由配置，请进行配置`;

        //构建需要push的路由对象
        const ensuerRoute: RouteRecordRaw = {
            path: route.path,
            name: route.name,
            children: [],
            redirect: {},
            component: {},
        };
        if (!route.children?.length) {
            //如果没有子级 则为首层
            ensuerRoute.component = route.component;
            Reflect.deleteProperty(ensuerRoute, 'children');
            Reflect.deleteProperty(ensuerRoute, 'redirect');
        } else {
            Reflect.deleteProperty(ensuerRoute, 'component');
            const menuChildern = menu.children;
            const routeChildern = route.children;

            menuChildern.forEach((item: any) => {
                const surl = splitUrl(item.url);
                const childernRoute = routeChildern.find(
                    (jtem) => surl === jtem.path,
                );
                if (!childernRoute)
                    throw `未找到对应的${sUrl}路由配置，请进行配置`;
                ensuerRoute.children.push(childernRoute);
            });
            ensuerRoute.redirect = { name: ensuerRoute.children[0].name };
        }
        selectRouter.push(ensuerRoute);
    }
    selectRouter.forEach((item) => {
        router.addRoute('Index', item);
    });
};

export default mapMenusToRouter;
