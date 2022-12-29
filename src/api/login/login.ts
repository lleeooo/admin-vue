import request from '@/utils/axios';
import { IResponseType } from './types';
import { ILogin } from './types';

/**
 * 登录
 */

export const accountLogin = (name: string, password: string) => {
    return request<IResponseType<ILogin>>({
        url: '/login',
        method: 'post',
        data: {
            name,
            password,
        },
    });
};

export const getUserInfoById = (id: number) => {
    return request<IResponseType>({
        url: `/users/${id}`,
        method: 'get',
    });
};

export const getUserMenuByRole = (id: number) => {
    return request<IResponseType>({
        url: `/role/${id}/menu`,
        method: 'get',
    });
};
