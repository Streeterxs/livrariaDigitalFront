import axios from 'axios';

const apiBooks = axios.create({
    baseURL: "http://localhost:3500"
})

export default apiBooks;