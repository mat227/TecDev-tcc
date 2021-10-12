import styled from 'styled-components'

const ContainerDesc = styled.div`
* { 
    margin: 0px;
}


@font-face {
    font-family: "Rowdies";
    src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
}

@font-face {
    font-family: "Quicksand";
    src: url('../RedefinirSenha/assets/fonts/Quicksand-VariableFont_wght.ttf');
}




    display: flex;
    flex-direction: column;
    background-image: url("./assets/images/bacckground.svg");
    background-color: #135578;



.box-mae {
    display: block;

    background-color: #12172B;
    

    width: 80em;
    height: 53em;

    padding: 1.3em;

    align-self: center;

    margin: 2em;

    border-radius: 2em;
}

.box-filha {
    border: 1px solid white;
    border-radius: 2em;
    width: 80em;
    height: 52em;

    display: flex;
    flex-direction: row;
}


.livro {
    display: flex;
    flex-direction: row;

    margin: 1.5em;

    color: #1FB5CD;
    font-size: 1.5em;
    font-family: Rowdies;
}

.livro img {
    height: 20em;
    margin-right: 2em;
}

.formas {
    display: flex;
    flex-direction: row;
}



.botoes button {
    padding: 0.8em;
    background-color: #1FB5CD;
    color: white;
    font-family: Rowdies;
    text-align: center;
    border: none;
    margin: 0.8em;
    

    width: 200px;
    font-weight: 400;
    margin-bottom: 1em;

    cursor: pointer;
}

.box1 div {
    display: flex;
    flex-direction: column;
    
    width: 20em;
    margin-top: 1em;

    font-family: Rowdies;
}

.titulo {
    font-size: 1.52em;
    color:#1FB5CD;
    font-family: Rowdies;

    display: flex;
    flex-direction: row !important;
}


.preco {
    color: white;
    font-size: 2.5em;
    font-weight: 300;
    margin-bottom: 2em;

    width: 10px;
}


.item {
    display: flex;
    flex-direction: row !important;

    margin-bottom: 1.5em;
}

.item p {
    margin-left: 1em;
    text-align: center;

    color: white;
    font-family: Rowdies;
}

.botoes {
    display: flex;
    flex-direction: row !important;

    margin-left: 20em;
    margin-bottom: 1em;
}


.box-filha hr {
    width: 80em;
    color: white;
    margin-left: -28.4em;
    margin-top: 2em;
    margin-bottom: -2em;
}

.box2 {
 display: flex;
 flex-direction: row !important;
}

.descricao {
    display: flex;
    flex-direction: column;
    margin-left: -27.5em;
    padding-right: 16em;
    border-right: 0.5px solid white;
}

.descricao p {
    width: 35em;
    font-family: QuickSand;
    color: white;
    line-height: 1.5em;
}
.titulodesc {
    margin-bottom: 0.8em;
    text-decoration: underline;
    color: #1FB5CD;
}

.caracteristicas {
    margin-left: 1em;
}

.titulocarac{
    margin-left: 1em;
    color: white;
    font-family: Rowdies;
    text-decoration: underline;
    color: #1FB5CD;
    margin-bottom: 1em;
}

.menu {
    margin-top: -1em !important;
    line-height: 1.5em;
    margin-bottom: 4.2em;
}

.itemc {
    display: flex;
    flex-direction: row !important;
    color:white;
}

.itemc p {
    font-family: Quicksand;
    margin-bottom: -1em;
}
    
`

export { ContainerDesc }