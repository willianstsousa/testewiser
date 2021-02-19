import axios from 'axios';
const api = axios.create({
    baseURL:"https://run.mocky.io/v3/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Expose-Headers": "Access-Control-*",
        "Access-Control-Allow-Headers": "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
        "Access-Control-Allow-Origin": "*"
    }
}) 

export default api; 