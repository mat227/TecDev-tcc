import styled from 'styled-components'


const ContainerAdmcp = styled.div`
        margin: 0;
        background-color: #1e4f63;
        background-image: url("./assets/images/fundo.svg");
@font-face {
    font-family: 'Baloo Thambi 2';
    src: url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@600&display=swap');
}


@font-face {
    font-family:  'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
}


@font-face {
    font-family: 'Quicksand', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@600&family=Quicksand:wght@300&display=swap');

}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 

.box_g {
    display: flex;
    flex-direction: row;
    padding: 1em ;
    
}


.informacao {
    font-family: 'Baloo Thambi 2';
    display: flex;
    flex-direction: column;
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
.aux{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.conteudo_direito {
    background-color: #183c53;
    width: 65em;
    height: 30em;
    margin-left: 1.5em;
    border-radius: 10px;
}
.tabelaCupom{
    border-radius: 1em;
    margin-right: 1.5em;
    background-color: rgba(30, 79, 99, 0.6);
    padding : 1em;
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
    font-size: 1.5em;
    margin-left: 1em;
}

.input_g {
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
    flex-grow: 3;
    font-size: 12px;
}

.agrp_input1, .agrp_input2, .agrp_3 {
    display: flex;
    flex-direction: column;
    margin: 2em;
}
.agrp_input1 {
    margin: 1em 4em 0 4em ;
}
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
 
 }
.agrp_input2 {
    margin-top: 1em;
    margin: 0.5em 4em;
}

.n_cupom, .n_duracao, .n_porcentagem, .n_disponivel, .n_regras {
    font-size: 12px;
}

.nome_cupom, .nome_duracao, .nome_porcentagem, .nome_disponivel, .nome_regras {
    margin: 0.5em;
    font-size: 0.6em;
}

.nome_cupom input, .nome_duracao input, .nome_porcentagem input, .nome_disponivel input, .nome_regras input {
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid;
    outline: none;
    background-color:#21659f ;
    margin:0.5em;
    width: 25%;
    height: 1em;
        
}

.v_ac {
    display: flex;
    flex-direction: column;
    background-color: #183c53;
    font-size: 1em;

    width: 15em;
    height: 1.5em;
    margin-left: 1em;
    margin-top: 1em;

    align-items: center;
    border-radius: 5px;
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
    margin-left: 20em;
    align-items: center;
    border-radius: 5px;
}

.adicionar_cupom button {
    margin-left: 1.3em;
    padding: 0.5em;
}

`

export { ContainerAdmcp }