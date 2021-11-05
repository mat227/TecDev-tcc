import styled from "styled-components";


const ContainerFav = styled.div`

    @font-face {
    font-family: "Rowdies";
    src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
}

@font-face {
    font-family: "Quicksand";
    src: url('../RedefinirSenha/assets/fonts/Quicksand-VariableFont_wght.ttf');
}

* { 
    margin: 0px;
}

.fav-container {
    background-color: #135578;
    background-image: url('/assets/images/bacckground.svg');
    min-height: 30em;

}

@font-face {
    font-family: "Rowdies";
    src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
}

@font-face {
    font-family: "Quicksand";
    src: url('../RedefinirSenha/assets/fonts/Quicksand-VariableFont_wght.ttf');
}

.hp1-logo{
    display: flex;
    padding-left:3em ;
  }
  .hp1-nome{
  padding-top: 0.7em;
  }
    
    .hp1-buscap{
        display: flex;
        flex-direction: row;
        background-color: #12172B;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .hp1-seus{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    
    
  
    .divBusca input{
      border-top: 0px solid;
      border-left: 0px solid;
      border-right: 0px solid;
      border-bottom: 0px solid;
      outline: none;
      color:white;
    }
    ::placeholder{
        color: white;
        opacity: 50%;
    }
   
    .divBusca{
        display: flex;
        flex-direction: row;
        background-color:#84D1DD;
        border:solid 1px;
        border-radius:10px;
        width:500px;
        font-family: "Rowdies";
        justify-content: space-between;
      }
      
      .divBusca button{
        margin-top: 0.2em;
        border: none;
        background-color: #84D1DD;
        border-radius: 20px;
        cursor: pointer;
  }
  
     
      #txtBusca{
        float:left;
        background-color:transparent;
        padding-left:10px;
        font-style:italic;
        font-size:14px;
        border:none;
        height:32px;
        font-family: "Rowdies";
        font-weight: 400;
        width: 35.5em;
      
      }
  
    
  
      .hp1-bolsa, .hp1-favorito,.hp1-perfil{
        padding-left: 1em;
      }
  
      .hp1-perfil{
        padding-right: 3em;
        padding-top: 3px;
      }
  
      .hp1-favorito{
        padding-top: 3px;
      }
  
  


.logowo {
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    font-family: Quicksand;
    color: #73a1b8;
}

.logowo img {
    height: 4em;
}

.redes img {
    margin: 1em;
    height: 2em;
}

.logowo {
margin: 1em;
}

.redes {
    display: flex;
    flex-direction: row;

    margin-left: auto;
}


.conteiner {
    display: flex;
    flex-direction: column;
    background-image: url('./assets/images/bacckground.svg');
    opacity: inherit;
}

.box-mae {
    display: flex;
flex-direction: column;
    background-color: #12172B;
    

    width: 70em;
    min-height: 100%;

    padding: 1.3em;

    align-self: center;

    margin: 2em;

    border-radius: 2em;
}

.box-filha {
    border: 1px solid white;
    border-radius: 2em;
    width: 70em;
    height: 50em;

    display: flex;
    flex-direction: row;
}



.selecao-livro{
    display: flex;
    flex-direction: column ;
  }
  
  
#campo-checkbox {
    float:left;
        margin-left:5em;
        margin-right:2em;

        height:5em;
        margin-top: 5em;
width: 4em;
      }
    

    .tllivro{
        font-family: 'Rowdies';
color: white;
font-size: 20px;
margin-left: 16em;
margin-top: -8em;
    }
    .preco{
        font-family: 'Rowdies';
color: white;
font-size: 20px;
margin-left: 16em;
margin-top: 3em;
text-decoration: underline;
    }
    
.botao-preco button {
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    background: #00EAFF;
    
    border: none;
    border-radius: 10px;
    font-family: "Rowdies";
  
    padding: 0.5em;
    margin: .3em;
  
    cursor: pointer;
  }
  
  .botao-preco{
      padding-left: 50em;
      margin-top: -8em;

  }

  .box-livros2{
      padding-top: 8em;
  }

  hr {
    color: #123455;
    margin-top: 10em;

}


  .titulo {
    display: flex;
    flex-direction: row !important;
  
    justify-content: center;
  
    margin: 1em;
  }
  
  .titulo p {
    color:white;
    font-family: Rowdies;
    font-size: 4em;
    font-weight: 300;
    text-shadow: 2px 3px black;
  
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #00B6FF; 
  }
  
  .quadrado {
    width: 80px;
    height: 2px;
    background: #6ECAEF ;
    margin-top: 2.5em;
  }



  .tllivro2{
      display: flex;
      flex-direction: row;
    font-family: 'Rowdies';
color: white;
font-size: 20px;
margin-left: 2em;
margin-top: 3.5em;
cursor: pointer;
}


.tllivro3{
    font-family: 'Rowdies';
color: white;
font-size: 20px;
margin-left: 25em;
}
       
`

export {ContainerFav}
