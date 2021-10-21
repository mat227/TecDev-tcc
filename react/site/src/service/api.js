import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})



export default class Api {
    

    async login(email, senha) {
        let r = await api.post(`/login/`, { email, senha });
        return r.data;
    }
    //Função de informaçoes do Cliente
    async infoC(){
        let r = await api.get(`/suaInfo`);
        return r.data;
    }
    async addLivro(livro,descricao,vpara,vde,autor,editora,genero,disponivel,qtd,imagem,brochura,promocao){
        let info = {
            livro : livro,
            descricao : descricao,
            vpara : vpara,
            vde : vde,
            autor : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
        }
        let r = await api.post(`/addlivro`,info)
        return r.data;
    }
}