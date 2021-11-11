import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/login'
})

export default class Api {

    async validarCodig(email, codigo) {
        let r = await api.post(`/validar`, { email, codigo });
        return r.data;
    }
    
    async resetSenha(email, codigo, novaSenha) {
        console.log(this.resetSenha)
        let r = await api.put(`/reset`, { email, codigo, novaSenha });
        return r.data;
    }

}

