import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.lopscorp.com/'
});

export default api;