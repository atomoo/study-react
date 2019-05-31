/**
 * @file wrap fetch
 * @author atom
 */
import {stringify} from 'qs';
import 'whatwg-fetch';

export function fetch<T>(url: string, options?: RequestInit): Promise<T> {
    options.method = options.method ? options.method.toUpperCase() : 'GET';
    options.cache = options.method === 'GET' ? 'no-cache' : 'default';
    options.headers = {
        ...options.headers,
        Accept: 'application/json'
    };
    return new Promise((resolve, reject) => {
        window.fetch(url, options)
            .then(resp => {
                if (resp.status >= 200 && resp.status < 300) {
                    return resp;
                }
                else {
                    throw new Error('网络异常');
                }
            }).then(resp => {
                return resp.json();
            }).then(data => {
                if (data.ret === '0') {
                    resolve(data.content);
                }
                else {
                    throw new Error(data.msg);
                }
            }).catch(e => {
                // global error handler
                console.error('global', e);
                reject(e);
            });
    });
}

export function getWithForm<T>(url: string, data?: any) {
    return fetch<T>(`${url}?${stringify(data)}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'GET'
    });
}

export function postWithForm<T>(url: string, data: any) {
    return fetch<T>(url, {
        body: stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST'
    });
}
export function getWithJSON<T>(url: string, data?: any) {
    return fetch<T>(`${url}?${stringify(data)}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}

export function postWithJSON<T>(url: string, data: any) {
    return fetch<T>(url, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });
}
