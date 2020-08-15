import axios from 'axios';

import config from '../config';

const HTTP = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

const URL = config.api.url;
const API_KEY = config.api.key;

const AUTH_TOKEN_STORAGE_KEY = 'authToken';

const ApiService = {

    getUrl(path) { return `${URL}/${path}`; },

    getToken() {
        const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
        return token ? `Bearer ${token}` : null;
    },

    getHeaders(options) {
        let headers = new Headers();
        headers.set('Content-Type', 'application/json');

        let token = this.getToken();

        if (token) {
            headers.set('Authentication', token);
        }

        if (options) {
            for (let [key, value] of options) {
                headers.set(key, value);
            }
        }

        return headers;
    },

    request(method, path, options) {

        if (!options) {
            options = {
                params: {}
            };
        }

        options.params.api_key = API_KEY;

        let url = this.getUrl(path);
        let headers = this.getHeaders(options.headers);
        

        return axios({
            method,
            url,
            headers,
            data: options.data,
            params: options.params
        });
    },

    /*
        HTTP Methods implemented
     */

    get(path, params, customHeaders) {
        return this.request(HTTP.GET, path, { params, headers: customHeaders });
    },

    post(path, data, params, customHeaders) {
        return this.request(HTTP.POST, path, { data, params, headers: customHeaders });
    },

    put(path, data, params, customHeaders) {
        return this.request(HTTP.PUT, path, { data, params, headers: customHeaders });
    },

    delete(path, params, customHeaders) {
        return this.request(HTTP.GET, path, { params, headers: customHeaders });
    },

    patch (path, data, params, customHeaders) {
        return this.request(HTTP.PUT, path, { data, params, headers: customHeaders });
    }
};

export default ApiService;