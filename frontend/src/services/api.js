import { API_URL, CLIENT } from '../constants/environment';
import { store } from '../store';
import axios from 'axios';
import storage from 'redux-persist/lib/storage';

const UNAUTHORIZED = 401;

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

api.interceptors.request.use(
    async config => {

        config.headers['Client'] = CLIENT;
        // const token = JSON.parse(await storage.getItem("@token"));

        // if (token) config.headers.Authorization = `Bearer ${token.token}`;

        return config;
    },
    err => Promise.reject(err)
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {

        // // escape from network error
        // if (!error.status) {
        //     return;
        // }
        // if (!error.response.hasOwnProperty('status') || !error.response.status) {
        //     return Promise.reject(error);
        // }
        // const { status } = error.response;

        // if (status === UNAUTHORIZED) {
        //     store.dispatch({ type: 'logout' });
        // }


        return Promise.reject(error);
    }
);

export default api;
