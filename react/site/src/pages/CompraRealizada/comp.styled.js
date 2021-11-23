import styled  from "styled-components";


const ContainerCompra= styled.div`

    margin: 0;

    width: 100%;
    height: 100%;

    background-color: #135578;
    background-image: url('/assets/images/bacckground.svg');

    @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');

    .conteudo {
        background-color:  rgba(18, 23, 43, 0.5);
        
        min-height: 85vh;
        width: 80vw;
        
        padding: 2em 3em;
        border-radius: 2em;
        margin: 1em auto;

        display:flex;
        flex-direction: column;

        color: white;
    }

    .box-texto {
        display:flex;
        flex-direction: row;

        margin-top: -1.5em;
    }

    .titulo {
        flex-grow: 1;

        font-family: Rowdies;
    }
    .caminho h5 {
        margin-top: 4.3em !important;

        font-family: Rowdies;
        font-weight: 400;
    }

    h1 {
        font-size:2.3em;
    }

    aside {
        width: 38vw;
        min-height: 30vw;
        
        padding:0.5em 1em;
        border-radius: 10px;

        font-family: Rowdies;
        font-size: 0.9em;
        font-weight: lighter;

        background: rgba(26, 82, 109, 1);
    }

    .big-box {
        display: flex;
        flex-direction: row;
    }

    .titulo2 {
        font-family: Rowdies;

        margin-bottom: 1em;
    }

  



    table{
        width: 37.7vw;
            border-collapse: collapse;
            border-spacing: 2em;
            justify-content: center;
            color: white;
        
        }
        th {
        font-family: Rowdies;
        font-weight: 100;
    }
        thead{
            border-bottom:  2px solid white;
            color: white;
            margin: 1em;
        
        }
      
        td{
           height: 1em;
           text-align: center;
           padding-bottom: 7em;
        }
      
    .livro {
        display: flex;

    }

   



    .box-small {
        margin-left: 7.5em;

        display: flex;
        flex-direction: column;

        align-items: center;
    }

    .box-confirmacao {
        display: flex;
        flex-direction: column;

        text-align: center;
        font-family: Rowdies;
        font-weight: 300;
        font-size: 0.8em;

        padding: 7em 2em 0.3em;

        margin-bottom: 4em;
        width: 25vw;
        height: 38vh;

        border-radius: 10px;
        background-color: #1A526D;

        letter-spacing: 0.03em;
    }

    .botoes {
        display:flex;
        flex-direction: column;

        width: 70%;
    }

    .botoes button {
        padding: 0.6em 1em;
        margin-bottom: 1em;

        background: #1FB5CD;
        border-radius: 5px;
        border: none;

        color: white;
        font-family: Rowdies;
        letter-spacing: 0.03em;
        font-size: 1em;
    }

    a, a:visited {
        text-decoration: none;
        color: white;
    }
`
export {ContainerCompra}