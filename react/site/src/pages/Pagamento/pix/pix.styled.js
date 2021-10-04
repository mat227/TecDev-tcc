import styled from "styled-components";

const ContainerPix = styled.div `
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

a, a:link, a:visited {
    text-decoration: none;
    color: white;
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
    .conteudo2{
       
        display:flex;
        flex-direction: row;
       
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
        margin-right: 3em;
        width: 45vw;
        height: 70vh;

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

    .info-pagamento{
        display: flex;
        flex-direction: column;
        font-size: "Rowdies";
        font-weight: 1000;
        background-color: #1A526D;
        align-items: center;
    }

    .tlpagamento{
margin-top: 4em;
    }

.tldescricao{
    padding-left: 5em;
    padding-right: 5em;
}
.botoespix{
    display: flex;
    flex-direction: row;
}

.bt1{
padding-top:22.3em;
}

.bt2{
padding-top:22em;
}

.bt2 button{
  width: 8em;
  height: 4em;
  padding:1em 0.2em
}

`

export { ContainerPix }