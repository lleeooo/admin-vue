import { defineStore } from 'pinia';
import { IUserState } from './types';
import {
    accountLogin,
    getUserInfoById,
    getUserMenuByRole,
} from '@/api/login/login';
import localCache from '@/utils/cache';
import router from '@/router';

export const useUserStore = defineStore('user', {
    state: (): IUserState => {
        return {
            token: '',
            userInfo: {},
            userMenus: [],
        };
    },
    actions: {
        //验证登录
        async accountLoginAction(name: string, password: string) {
            const res = await accountLogin(name, password);
            const data = res.data.data;
            const { token, id } = data;
            this.token = token;
            localCache.setCache('token', token);
            this.getUserInfoAction(id);
        },

        //获取用户信息
        async getUserInfoAction(id: number) {
            const res = await getUserInfoById(id);
            const data = res.data;
            this.userInfo = data.data;
            localCache.setCache('userInfo', data.data);
            this.getUserMenuAction(data.data.role.id);
        },

        async getUserMenuAction(id: number) {
            const res = await getUserMenuByRole(id);
            const data = res.data;

            //自己添加的menu
            data.data.unshift({
                children: [],
                id: 99999,
                type: 1,
                name: '首页',
                url: '/main/main',
            });
            this.userMenus = data.data;
            localCache.setCache('userMenus', data.data);

            router.push('/');
        },
    },
    // 使用该插件，开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                //key的名称
                key: 'userPiniaCache',
                //这里存储默认使用的是session，我更改为localStorage
                storage: localStorage,
                // 可以选择哪些进入local存储，这样就不用全部都进去存储了
                // 默认是全部进去存储
                // paths: ['list'],
            },
        ],
    },
});
