import axios, { type AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestConfig, RequestInterceptors } from './types';

class Request {
    // axios 实例
    instance: AxiosInstance;
    // 拦截器对象
    interceptorsObj?: RequestInterceptors<AxiosResponse>;

    constructor(config: RequestConfig) {
        this.instance = axios.create(config);
        this.interceptorsObj = config.interceptors;
        // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
        this.instance.interceptors.request.use(
            (res: any) => res,
            (err: any) => err,
        );

        // 使用实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors as any,
            this.interceptorsObj?.requestInterceptorsCatch,
        );
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch,
        );
        // 全局响应拦截器保证最后执行
        this.instance.interceptors.response.use(
            // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
            (res: AxiosResponse) => {
                return res.data;
            },
            (err: any) => err,
        );
    }

    request<T>(config: RequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config);
            }
            const url = config.url;
            this.instance
                .request<any>(config)
                .then((res: any) => {
                    // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
                    if (config.interceptors?.responseInterceptors) {
                        res = config.interceptors.responseInterceptors(res);
                    }
                    resolve(res);
                })
                .catch((err: any) => {
                    // 统一错误处理
                    if (axios.isCancel(err)) {
                        console.log('请求取消：', err.message);
                    } else if (err.response) {
                        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                        console.log('请求错误：', err.response.status, err.response.data);
                    } else if (err.request) {
                        // 请求已经发出，但没有收到响应
                        console.log('网络错误：', err.request);
                    } else {
                        // 其他错误
                        console.log('其他错误：', err.message);
                    }
                    reject(err);
                });
        });
    }
}

export default Request;
export type { RequestConfig, RequestInterceptors };
