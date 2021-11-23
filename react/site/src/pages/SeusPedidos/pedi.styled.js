import styled  from "styled-components";


const ContainerPedido = styled.div`

margin: 0;

width: 100%;
height: 100%;

background-color: #135578;
background-image: url('/assets/images/bacckground.svg');

font-family: "Rowdies";

    .conteudo{
        background-color:  rgba(18, 23, 43, 0.5);
        border-radius: 2em;
        height: 85vh;
        margin: 1em;
        width: 80vw;
        padding: 2em 3em;
        
        display:flex;
        flex-direction: column;

        margin: 1em auto;

        color: white;
    }
    .livro{
       
    }

    .titulo {
        flex-grow: 1;
        font-family: Rowdies;
        margin-top: -2em;
    }
    h1 {
        font-size:2.3em;
    }

    .box {
        background: rgba(26, 82, 109, 1);
        width: 80vw;
        height: 80vh;
        border-radius: 15px;
        padding: 1em;
    }
    .item {
        background: rgba(16, 43, 70, 0.6);
        margin: 0.8em;
        padding: 1em 3em;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .descricao {
        margin-left: 0.5em;
        width: 10vw;
        font-size: 1em;
    }   

    .menu-item {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .menu {
        display: flex;
    }

    .quadrado {
        width: 30px;
        height: 2px;
        background: #6ECAEF;
        margin-top: 2.8em;
    }

`
export {ContainerPedido}