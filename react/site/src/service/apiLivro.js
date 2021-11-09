import axios from "axios";

const api = axios.create ({
    baseURL: 'https://tecdevtcc.herokuapp.com/livros'
})


export default class Api {

    async cadastrarCartao(nrcartao, titular, sobrenome, vencimento, parcelas, cvv) {
        let cadastroJson = {
            nrcartao: nrcartao,
            titular: titular,
            sobrenome: sobrenome,
            vencimento: vencimento,
            parcelas: parcelas,
            cvv: cvv
            
        }

        let r = await api.post(`/pagamento`, cadastroJson );
        return r.data
    }

    async busca (search) {
        let r = await api.get(`/busca?search=${search}`)
        return r.data;
    }

    async promocao () {
        let r = await api.get(`/livrospromocao`)
        return r.data;
    }

    async livroterror () {
        let r = await api.get(`/livroterror`)
        return r.data;
    }

    async livrocomedia () {
        let r = await api.get(`/livrocomedia`)
        return r.data;
    }

    async livroromance () {
        let r = await api.get(`/livroromance`)
        return r.data;
    }

    async livrobiografia () {
        let r = await api.get(`/livrobiografia`)
        return r.data;
    }

    async livropoesia () {
        let r = await api.get(`/livropoesia`)
        return r.data;
    }

    
}