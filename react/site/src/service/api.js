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
    //put do livro
    async atualizarLivro(id, livro, descricao, vpara,vde,datac, autor, editora, genero, disponivel, qtd, imagem, brochura, promocao){
        let pack ={
            livro : livro,
            descricao : descricao,
            vpara : vpara,
            vde : vde,
            datac : datac,
            autor : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
            
        }
        let r = await api.put('/alterandoLivro/'+ id, pack);
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

    async cadastro(email, senha,telefone, nome, cpf, datanas,nomerua,cep,numerocasa,bairro,complemento) {
        let cadastroJson = {
            email: email,
            senha: senha,
            telefone:telefone,
            nome: nome,
            cpf: cpf,
            datanas: datanas,
            nomerua:nomerua,
            cep:cep,
            numerocasa:numerocasa,
            bairro:bairro,
            complemento:complemento
            
        }

        let r = await api.post(`/cadastro`, cadastroJson );
        return r.data
    }

    async cadastrarLivro(livro, descricao, vpara, vde,datac, autor, editora, genero, disponivel,qtd,imagem,brochura,promocao) {
        let naomexa = {
            livro: livro,
            descricao: descricao,
            vpara: vpara,
            vde: vde,
            datac : datac,
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
    // cupom
    async listaCupom(){
        let r  = await api.get(`cupom`);
        return r.data;
    }
    async addCupom(nome, datac, porce ,regra){
        let cont = {
            nome:nome,
            dataduracao : datac,
            porce : porce,
            regra : regra
        }
        var r = await api.post(`/addCupom`, cont);
        return r.data;
    }
    // infomaçoes do adm v1
    async infoA() {
        let r = await api.get(`infoA`);
        return r.data;
    }

    // /// teste nico
     async recuperar(email) {
        let a = {
            email: email
        }
        let r = await api.post(`/redefinir`, a);
         return r.data;
    }
}