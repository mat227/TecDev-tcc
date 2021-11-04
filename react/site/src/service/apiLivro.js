import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/livros'
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

    
}