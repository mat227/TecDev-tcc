import styled from 'styled-components'


const ContainerAdm_c_p = styled.div`

* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
    background-color: #1e4f63;
    background-image: url("../Perfil_ADM/assets/images/fundo.svg");
  }

.container {
    color: #fff;
}


.cabecalho {
    background-color: #12172b;
    display: flex;
    flex-direction: row;
   
   
    height: 7em;
}


.adicionar img {
    position: absolute;
    top: 1.5em;
    left: 3em;

    width: 35px;

}

.bola img {
    position: relative;

    top: 0.4em;
    left: 1em;
    width: 100px;
}

.adicionar_foto {
    position: absolute;
    top: 5.3em;
    left: 2.5em;
    font-family: 'Baloo Thambi 2';

    font-size: 12px;
    color: #fff;
}

.nome_adm {
    display: flex;
    flex-direction: column;

    margin-left: 2em;

    color: #fff;
    font-family: 'Baloo Thambi 2';
}

.nome {
    font-family: 'Baloo Thambi 2';
    font-size: 40px;
    margin-top: 0.5em;
}


.box_g {
    display: flex;
    flex-direction: row;

    padding-top: 10px;
    padding-left: 20px;
}

.conteudo_esquerdo {
    background-color: #183c53;
    width: 10em;
    height: 30em;

    border-radius: 10px;
}

.informacao {
    font-family: 'Baloo Thambi 2';

    display: flex;
    flex-direction: column;
}

.botao_e button {
    color: #fff;
    background: #226dae;
    font-family: 'Baloo Thambi 2';
    font-size: 16px;
    
    border: none;
    align-items: center;
    cursor: pointer;
  
    padding: .5em;
    margin-top: 1em;
    margin-left: 0em;
    width: 10em;
  }

.botao1 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 5em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}

.botao2 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 2em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}

.botao3 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 1em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}

.conteudo_direito {
    background-color: #183c53;
    width: 65em;
    height: 30em;
    margin-left: 1.5em;
    border-radius: 10px;
}

.box {
    display: flex;
    flex-direction: column;

    margin-left: 1em;
    margin-top: 1em;
    width: 63em;
    height: 28em;

    background-color: #21659f;

    border-radius: 10px;
}

.titulo {
    display: flex;
    flex-direction: row;

    margin-top: 2em;
    margin-left: 1em;
}

.cupons_img img {
    width: 1.5em;
    height: 1.5em;
    margin-left: 2em;
}

.cupons {
    font-family: 'Baloo Thambi 2';
    font-size: 20px;
    margin-left: 1em;
}

.input_g {
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
}

.agrp_input1, .agrp_input2, .agrp_3 {
    display: flex;
    flex-direction: row;
}

.agrp_input1 {
    margin-top: 1em;
    margin-left: 4em;

}

.agrp_input2 {
    margin-top: 1em;
    margin-left: 4em;
}

.agrp_3 {
    margin-top: 2em;
    margin-left: 4em;
}

.n_cupom, .n_duracao, .n_porcentagem, .n_disponivel, .n_regras {
    font-size: 12px;
}

.nome_cupom, .nome_duracao, .nome_porcentagem, .nome_disponivel, .nome_regras {
    margin-right: 4em;
    font-size: 12px;
}

.nome_cupom input, .nome_duracao input, .nome_porcentagem input, .nome_disponivel input, .nome_regras input {
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid;
    outline: none;
    background-color:#21659f ;
  
    width: 15em;
    height: 1em;
        
}

.v_ac {
    display: flex;
    flex-direction: row;
    background-color: #183c53;
    font-size: 14px;

    width: 15em;
    height: 1.5em;
    margin-left: 1em;
    margin-top: 1em;

    align-items: center;
    border-radius: 5px;
}

.botao{
    font-size: 14px;
}

.img img {
    width: 0.8em;
    height: 0.8m;

    margin-left: 2em;
    margin-top: .5em;
}

.img {
    margin-right: 0.5em;
}

.botao {
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
}

.adc_c {
    display: flex;
    flex-direction: row;
    background-color: #183c53;
    font-size: 12px;

    width: 13em;
    height: 1.5em;
    margin-left: .4em;
    margin-top: 1em;

    align-items: center;
    border-radius: 5px;
}

.adicionar_cupom {
    margin-left: 1.3em;
}

.lixo {
    display: flex;
    flex-direction: row;
    

    background-color: #183c53;
    align-items: center;

    width: 13em;
    height: 1.4em;
    margin-left: 8em;
    margin-top: 1em;
       
    border-radius: 5px;

}

.nome_lixo button {
    border: none;
    align-items: center;
    cursor: pointer;
    color: #fff;

    background-color: #183c53;;
    font-size: 12px;
}

.img_lixo img {
    width: 0.8em;
    height: 0.8em;

    margin-left: 1em;
    margin-right: 1em; 
}

.box2 {
    display: flex;
    flex-direction: column;
}


.titulo2 {
    display: flex;
    flex-direction: row;

    margin-top: 2em;
    margin-left: 1em;
}

.promocao_img img {
    width: 1.5em;
    height: 1.5em;
    margin-left: 2em;
}

.promocao {
    font-family: 'Baloo Thambi 2';
    font-size: 20px;
    margin-left: 1em;
}

.input_g2 {
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
}

.agrp_input4, .agrp_input5, .agrp_6 {
    display: flex;
    flex-direction: row;
}

.agrp_input4 {
    margin-top: 1em;
    margin-left: 4em;

}

.agrp_input5 {
    margin-top: 1em;
    margin-left: 4em;
}

.agrp_6 {
    

    margin-top: 2em;
    margin-left: 4em;
}

.n_livro, .n_valor, .n_atual, .n_disponivel2, .n_duracao2 {
    font-size: 12px;
}

.nome_livro, .nome_valor, .nome_atual, .nome_disponivel2, .nome_duracao2 {
    margin-right: 4em;
    font-size: 12px;
}

.nome_livro input, .nome_valor input, .nome_atual input, .nome_disponivel2 input, .nome_duracao2 input {
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid;
    outline: none;
    background-color:#21659f ;
  
    width: 15em;
    height: 1em;
        
}

.adc_p {
    display: flex;
    flex-direction: row;
    background-color: #183c53;
    font-size: 12px;

    width: 14em;
    height: 1.9em;
    margin-left: .4em;
    margin-top: 1em;

    align-items: center;
    border-radius: 5px;
}

.adicionar_promocao {
    margin-left: 1em;
}

.lixo2 {
    display: flex;
    flex-direction: row;
    

    background-color: #183c53;
    align-items: center;

    width: 13em;
    height: 1.4em;
    margin-left: 0em;
    margin-top: 1em;
       
    border-radius: 5px;

}

.nome_lixo2 button {
    border: none;
    align-items: center;
    cursor: pointer;
    color: #fff;

    background-color: #183c53;;
    font-size: 12px;
}

.img_lixo2 img {
    width: 0.8em;
    height: 0.8em;

    margin-left: 1em;
    margin-right: 1em; 
}



.redes {
    display: flex;
    flex-direction: row;

    margin-top: 2em;
    background-color: #12172b;

    width: 79em;
    height: 4.5em;
}

.logo {
  display: flex;
  flex-direction: column;

  margin-left: 2em;
  margin-top: 1em;
}

.img_logo img {
  width: 6em;
  
}

.redes_sociais {
    display: flex;
    flex-direction: row;
    
    margin-left: 65em;
    margin-top: 1.5em;
}

.tecdev {
    color:#9FD4EF;
}

.instagram img, .facebook img {
    width: 1.5em;
    height: 1.5em;
    
    margin-left: 1em;
}
`

export { ContainerAdm_c_p }