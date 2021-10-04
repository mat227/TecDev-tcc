import styled from "styled-components";

const ContainerBoleto = styled.div `

margin: 0;

width: 100%;
height: 100vh;

background-color: #135578;
background-image: url('/assets/images/bacckground.svg');


@font-face {
        font-family: "Rowdies";
        src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
    }

@font-face {
    font-family: "Quicksand";
    src: url('../RedefinirSenha/assets/fonts/Quicksand-VariableFont_wght.ttf');
}

.conteudos{
        background-color:  rgba(18, 23, 43, 0.5);
        border-radius: 2em;
        height: 80vh;
        margin: 1em;
        width: 80vw;
        padding: 1em 3em;
        
        display:flex;
        flex-direction: column;

        margin: 1em auto;

        color: white;
    }

    .box-texto {
        display:flex;
        flex-direction: row;
        margin-top: -1.5em;
    }

    .titulo {
        flex-grow: 1;
    }
    .caminho h5 {
        margin-top: 4.3em !important;
    }

    h1 {
        font-size:2.3em;
    }

    aside {
        margin-left: 2em;
        
        background-color: rgba(12, 100, 145, 0.4);
        
        width: 20vw;
        height: 66vh;

        display: flex;
        flex-direction: column;

        line-height: 5em;
        border-radius: 10px;
    }

    .formas {
        display: flex;
        align-items: center;
        margin:1em;
    }

    .formas img {
        margin-right: 0.8em;
    }

`

export { ContainerBoleto }