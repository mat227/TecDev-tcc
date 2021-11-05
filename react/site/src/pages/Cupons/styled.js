import styled from 'styled-components'


const ConteinerCupom = styled.div`

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

.cup-container {
    background-color: #135578;
    background-image: url('/assets/images/bacckground.svg');
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
    

    width: 100%;
    height: 35em;


    align-self: center;

    margin: 2em;

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






.selecao-livro{
    display: flex;
    flex-direction: row;
    background-color: #0A0F21;
    margin-top: 6em;
  margin-left: 3.5em;
  margin-right: 4.5em;

  }
  
  
  
  .box-livros{
    display: flex;
    font-family: "Rowdies";
    color: white;
    display: table-cell;
  height: 50vh;
  padding-top: 3.5em;

  }

  
  
  .imgt{
    display: flex;
    flex-direction: column;
    font-family: "Rowdies";
  margin-left: 6em;
  }
  
  .imgt img{
    border: 1px dotted;
  }
  
  .box-precos{
    display: flex;
    flex-direction: row-reverse;
    font-family: "Rowdies";
    margin-top: -15em;
    margin-right: 2em;
    padding-right: 20em;
  }
  
   .por{
    padding-left: 10em;
    font-size: 40px;
  }

  .por1{
    padding-left: 32em;
    padding-top: 1em;
    font-size: 12px;
  }
  .por2{
    padding-left: 26em;
    padding-top: 1em;
    font-size: 15px;
    text-decoration: underline;
  }
  
  .botao-preco{
    padding-top: 2em;
    padding-left: 24.5em;
  }
  
  .tllivro{
    font-size: 12px;
    font-weight: 200;
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
  
  .botao-preco2 button {
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
  
  
  .botao-preco2 {
  padding: 2em;
  }
  .selecao-especial{
    display: flex;
    flex-direction: row;
    background-color: #215F7B;
    height: 50vh;
  width: 130vh;
    padding-left: 5em;
    margin-right: 15.46em;
    margin-left: 15em;
    margin-top: 5em;
  }
  
  .slide-titulos{
  display: flex;
  color: white;
  font-family: "Rowdies";
  flex-direction: column;
  
  
  }
  
  
  .til1{
    display: flex;
  color: white;
  font-size: 30px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #00B6FF;
  text-decoration: underline white;
  padding-top: 2em;
  }
  
  .til2{
    display: flex;
  color: white;
  font-size: 25px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #00B6FF;
  text-decoration: underline white;
  padding-top: 1em;
  }
  
  .botao-slide2 button {
    font-weight: 600;
    font-size: 25px;
    color: #fff;
    background: #00EAFF;
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #00B6FF;
    border: none;
    border-radius: 10px;
    font-family: "Rowdies";
  
    padding: 0.4em;
    margin: 1em;
  
    cursor: pointer;
  }
  
  .botao-slide2{
    display: flex;
    padding-right: 2px;
  }
  
  .img-combo{
    padding-left: 2em;
    padding-top: 2em;
  }
  
  .img-combo img{
    height: 250px;
    width: 350px;
    margin-top: -230px;
    margin-left: 20em;
  }
  
  
`


export { ConteinerCupom }