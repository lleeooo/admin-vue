import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { ElMessage } from 'element-plus';
import localCache from '@/utils/cache';

const service = axios.create({
    baseURL: 'http://152.136.185.210:5000',
    timeout: 50000,
}); // Request interceptors

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localCache.getCache('token');
        if (token) (config.headers as any).Authorization = `Bearer ${token}`;
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        return response;
    },
    (error: AxiosError) => {
        // do something
        console.log('err' + error);
        ElMessage.error('接口异常报错');
        return Promise.reject(error);
    },
);

export default service;
