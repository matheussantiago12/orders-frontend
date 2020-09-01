import axios from 'axios';

const api = axios.create({
    baseURL: 'https://santiago-orders-backend.herokuapp.com',
});

export default api;
