import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})



export default class Api {
    

    async login(email, senha) {
        let a = {email,senha}
        let r = await api.post(`/login`, a);
        return r.data;
    }
    //Função de informaçoes do Cliente
    async infoC(){
        let r = await api.get(`/suaInfo`);
        return r.data;
    }
    // lista livros pagina do adm
    async listaLivroAdm(){
        let r = await api.get(`/listaLivro`);
        return r.data;
    }
    //deletar livro 
    async deletaLivro(id){
        let r = await api.delete(`/dellivro/${id}`)
        return r.data;
    }
    async atualizarLivro(id, nome, descricao, vpara,vde,data, autor, editora, genero, disponivel, qtd, imagem, brochura, promocao){
        let pack ={
            livro : nome,
            descricao : descricao,
            para : vpara,
            de : vde,
            lancamento : data,
            autora : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
        }
        let r = await api.put(`/alterandoLivro/${id}`, pack);
        return r.data;
    }
    //parte adm 
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

    async cadastro(email, senha,telefone, nome, cpf, datanas) {
        let cadastroJson = {
            email: email,
            senha: senha,
            telefone:telefone,
            nome: nome,
            cpf: cpf,
            datanas: datanas
            
        }

        let r = await api.post(`/cadastro`, cadastroJson );
        return r.data
    }

    async cadastrarLivro(livro, descricao, vpara, vde, autor, editora, genero, disponivel,qtd,imagem,brochura,promocao,data) {
        let naomexa = {
            livro: livro,
            descricao: descricao,
            vpara: vpara,
            vde: vde,
            data : data,
            autor: autor,
            editora: editora,
            genero: genero,
            disponivel:disponivel,
            qtd:qtd,
            imagem: imagem,
            brochura:brochura,
            promocao:promocao
            
        }

        let r = await api.post(`/addlivro`,naomexa);
        return r.data
    }

    async listarLivro() {
        let r = await api.get(`/addlivro/`);
        return r.data;
    }
}