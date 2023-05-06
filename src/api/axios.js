import axios from 'axios';

export default axios.create({
    baseURL: process.env.api_base_url || 'https://food-delivery-99a8.onrender.com',
    withCredentials: true,
    
});