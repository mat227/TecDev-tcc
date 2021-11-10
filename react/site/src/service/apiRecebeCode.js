import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/login'
})

export default class Api {



    async validarCodig(email, codigo) {
        let r = await api.post(`/validar`, (email, codigo));
        return r.data;
    }

}

