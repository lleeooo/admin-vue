import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    baseURL: 'http://152.136.185.210:5000',
}); // Request interceptors

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        return response;
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
