import styled from 'styled-components'


const Container = styled.div`
    margin: 0em;
    background-image: url('/assets/images/bacckground.svg');
            background-color: #125375;
            font-family: "Rowdies";
            font-family: "Quicksand";

    * {
        box-sizing: border-box;
        padding:0;
        margin: 0;
    }
    
    .box_g
    {
        padding:1.5em;
        min-height: 80vh;

    }

    .container {
        color: #fff;
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

        margin-top: 1.5em;
        margin-left: 1em;
    }

    .livro_img img {
        width: 1.5em;
        height: 1.5em;
        margin-left: 2em;
    }

    .livro {
        font-family: "Rowdies";
        font-size: 1em;
        margin-left: 2em;
        color: #fff;
    }

    .sub_titulo {
        display: flex;
        flex-direction: column;
        font-size: 1em;

        width: 15em;
        height: 2em;
       
        margin-bottom: 1em;
    }

    .img img {
        width: 0.8em;
        height: 0.8m;

        margin-left: 1em;
        margin-top: .5em;
    }

    .img {
        margin-right: 0.5em;
    }

    .botao {
        font-family: 'Quicksand';
        font-size: 12px;
        color: #d3d3d3;
    }

    .input_g {
        display: flex;
        flex-direction: column;
        font-family: 'Quicksand';
        font-size: 12px;
        color: #d3d3d3;
    }

    .agrp_input1, .agrp_input2, .agrp_input3 {
        display: flex;
        flex-direction: row;
    }

    .agrp_input1 {
        margin-top: 2em;
        margin-left: 4em;

    }

    .agrp_input2 {
        margin-top: .5em;
        margin-left: 4em;
    }

    .agrp_input3 {
        margin-top: 0.5em;
        margin-left: 4em;
    }

    .editor{
        margin-left: 3.8em;
    }

    .nome_obra, .nome_autor, .nome_dsc, .nome_genero, .nome_acabamento, .nome_edicao, .nome_editora, .nome_valor, .nome_promocao, .nome_de, .nome_para {
        margin-right: 4em;
        font-size: 16px;
    }

    .nome_obra input, .nome_autor input, .nome_dsc input, .nome_genero input, .nome_acabamento input, .nome_edicao input, .nome_editora input, .nome_valor input, .nome_promocao input, .nome_de input, .nome_para input {
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid;
        outline: none;
        
        background-color:#21659f ;
        
    
        width: 12em;
        height: 1em;
            
    }

    .box_g {
        display: flex;
        flex-direction: row;

        padding-top: 10px;
        padding-left: 20px;
    }

   

    .botao1 button {
        background-color: #183c53;
        font-family: "Quicksand";
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


    .sub_titulo2 {
        display: flex;
        flex-direction: row;
        background-color: #183c53;
        font-size: 12px;
        

        width: 15em;
        height: 2em;
        margin-left: 4em;
        margin-top: 1.5em;

        align-items: center;
        border-radius: 5px;
    }
    
    .sub_titulo2 button {
        color: #FFF;
    }

    .img2 img {
        width: 0.8em;
        height: 0.8m;

        margin-left: 1em;
        margin-top: .5em;
    }

    .img2 {
        margin-right: 0.5em;
    }

    .botao2 {
        font-family: 'Quicksand';
        font-size: 12px;
    }


    thead {
        background-color: #183c53;
        border:solid 1px;

        font-weight: 1;
    }

    table {
    margin-top: 2em;
    border:solid 1px;

    font-weight: 1;
    }


    td {
        text-align: left;
        height: 1em;
        padding: 7px;
        color: #6D6868;

        font-weight: 1;

        font-size: 14px;
        font-family: "Quicksand";
    }

    .white {
      background-color: #21659f;
    }

    th {
        height: 2em;
        text-align: left;
        padding: 7px;

        font-weight: 1;
        color: #ffff;
        font-family: "Rowdies";
    } 

    .tabela{
        overflow: hidden;
        overflow-y: auto;
    }

    .reload{
        display: flex;
        justify-content: right;   
        margin: 0 0.5em 0 0 ;  
    }
    
    .table-user {
    border-collapse: collapse;
    width: 100%;
  
    }

    .int {
    background-color: #21659f;
    }

    .a {
    width: .1em;
    }

    a{
        font-family: 'Rowdies';
    }

    .botao2  button{
        cursor: pointer;
        border: none;
        background : #183c53;
    }

    .aa button {
        cursor: pointer;
        border: none;
        background-color: #21659f;
    }

    .aa img {
        height:1em;
    }

    .aa > button {
        visibility: hidden;
    }

    tr:hover {
        .aa > button {
            visibility: visible;
        }
    }
  
    button img {
        height: 1.5em;
    }

    .table-corpo{
        overflow-y: visible;    
    }
    tbody td{
        color: white;
    }



`

export { Container }