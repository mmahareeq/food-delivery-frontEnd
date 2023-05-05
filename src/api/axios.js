import axios from 'axios';

export default axios.create({
    baseURL: 'https://food-delivery-99a8.onrender.com',
    withCredentials: true
});