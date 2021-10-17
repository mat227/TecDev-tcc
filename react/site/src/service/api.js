import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})



export default class Api {
    

    async login(email, senha) {
        let r = await api.post(`/login/`, { email, senha });
        return r.data;
    }

}