import styled  from "styled-components";


const ContainerPag = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');

    margin: 0;

    width: 100%;
    height: 100%;

    background-color: #135578;
    background-image: url('/assets/images/bacckground.svg');
    

    font-family: Rowdies;
    .conteudos{
        background-color:  rgba(18, 23, 43, 0.5);
        border-radius: 2em;
        height: 85vh;
        margin: 1em;
        width: 80vw;
        padding: 1em 3em;
        
        display:flex;
        flex-direction: column;

        margin: 1em auto;

        color: white;
    }

    .box-big {
        display: flex;
        flex-direction: row;
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
    

    .box-info {
        background-color: rgba(26, 82, 109, 1);

        width: 75%;
        height: 66vh;
        border-radius: 10px;
        padding-left: 1em;
        margin-left: 1em;
    }

    .bandeiras {
        display:flex;
        flex-direction: row;

        margin: 1.2em 0em;
        width: 90%;
        background: rgba(19, 57, 83, 1);

        align-items: center;

        border-radius: 10px;
    }

    .bandeiras img {
        margin-left: 1em;
        padding: 0.5em;
    }

    .add {
        margin-left: auto;
    }

    .form-group {
        display: flex;
        flex-direction: column;

        width: 90%;
        font-family: Rowdies;
        font-weight: lighter;
    }

    .form-group input {
        border-radius: 5px;
        border:none;
        background: rgba(21, 60, 86, 1);
        width: auto;
        height: 2.3em;
        padding-left:1em;
        color: white;
    }

    small {
        font-size: 0.7em;
        opacity: 60%;
        letter-spacing: 0.3em;
        color: white;
    }




    .form-group1 {
        display: flex;
        flex-direction: row;

        width: 90%;
        justify-content: space-between;

        font-family: Rowdies;
        font-weight: lighter;

        margin-bottom: 1em;
    }

    .form-group1 div {
        display: flex;
        flex-direction: column;
    }

    .form-group1 input {
        width: 20em;
        border-radius: 5px;
        border:none;
        background: rgba(21, 60, 86, 1);
        
        height: 2.3em;
        padding-left:1em;
        color: white;

    }
    
    select {
        width: 100%;
        height:5vh;
        background: rgba(21, 60, 86, 1);
        border:none;
        font-family: Rowdies;
        color:white;
        font-size: 1.2em;
        font-weight: lighter;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-top: 1.5em;
        margin-bottom: 1em;
    }

    .botoes button {
        margin-left: 1em;
        padding: 0.5em 2em;

        background: rgba(31, 181, 205, 1);
        border: none;
        border-radius: 4px;
        color: white;
        font-family: Rowdies;
        font-weight: 300;

        padding-top: 0.6em;
        padding-bottom: 0.6em;

        text-align:center;

        cursor: pointer;
    }

   .formas a {
        color:white;
        text-decoration:none;
    }
`
export {ContainerPag}