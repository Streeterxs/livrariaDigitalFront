import axios from 'axios';

const apiLivros = axios.create({
    baseURL: "http://localhost:3500"
})

export default apiLivros;