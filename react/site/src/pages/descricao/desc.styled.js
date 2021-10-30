import styled from 'styled-components'

const ContainerDesc = styled.div`
display: flex;
flex-direction: column;
background-image: url("./assets/images/bacckground.svg");
background-color: #135578;

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




   



.box-mae {

    background-color: #12172B;
    

    width: 75em;
    height: 50em;

    padding: 1.3em;

    align-self: center;

    margin: 5em;

    border-radius: 2em;
}

.box-filha {
    border: 1px solid white;
    border-radius: 2em;
    width: 75em;
    height: 50em;

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
margin-right:1em;
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
    margin-bottom: 1em;
}


.box-filha hr {
    width: 75em;
    color: white;
    margin-left: -28.4em;
    margin-top: 2em;
    margin-bottom: -2em;
}

.box2 {
 display: flex;
 flex-direction: row !important;
}

.descricaoa {
    display: flex;
    flex-direction: column;
    border-right: 0.5px solid white;
}

.descricaoa p {
    font-family: QuickSand;
    color: white;
    line-height: 1.5em;
    margin-left: -27em;
}
.titulodesc {
    margin-bottom: 0.8em;
    text-decoration: underline;
    color: #1FB5CD;
    margin-left: -27em;

}

.titulo img{
    margin-left: 10vh;
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