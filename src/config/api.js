import axios from "axios";
//require('dotenv').config();

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/'
});

api.interceptors.request.use(async config => {
    config.headers = {
        Accept: '*/*',
        'If-None-Match': '1265c4ced3f4adf6abc48ccd3489addc7dac3381'
    };

    return config;
});

export default api;