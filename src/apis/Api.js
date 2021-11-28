import axios from "axios";

const Api = axios.create({
    baseURL:'http://localhost:8080/api/'
});

Api.interceptors.request.use(function(config){
    const token = localStorage.getItem('token');
    if(token){
        
        config.headers.common['Authorization'] = `Bearer ${token}`; 
    }
    return config;
},function(error){
    return Promise.reject(error);
});

export default Api;

