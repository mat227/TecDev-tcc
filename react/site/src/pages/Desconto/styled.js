
import styled from 'styled-components'


const ContainerDesconto = styled.div`

    display: flex;
    flex-direction: column;
    font-family: "Rowdies";



* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
    text-align: center;

  }

  a, a:link, a:visited {
    text-decoration: none;
    color: white;
  }
  
 


     
.oferta-da-semana{
  display: flex;
  flex-direction: column;
  background-color: #125375 ;
  background-size: 210vh;
  height: 250vh;
  opacity: 100%;
}


.trio button {
  font-weight: 700;
    background: white;
  
  border: none;
  border-radius: 150px;
  font-family: "Rowdies";
align-self: center;
  padding: 1.2em;
  margin: 3em 3em 0.5em 3em;
  font-weight: 400;

  cursor: pointer;
}

.desc{
  padding: 0.2em;
}

.trio{
    padding-left: 27.5em;
}

.trio2{
  display: flex;
  flex-direction: row;
  color: white;
  font-family: "Rowdies";
  font-weight: 550;
  padding-left: 25em;
}

.titilo-trio1, .titilo-trio2,.titilo-trio3{
  display: flex;
  padding-left: 4.5em;
}

.hp1-titulo{
display: flex;
justify-content: center;
color: white;
font-size: 30px;
-webkit-text-stroke-width: 1.5px;
-webkit-text-stroke-color: #00B6FF;
text-decoration: underline white;
padding-top: 1em;

}



.tldesconto1{
    display: flex;
    color: white;
    font-size: 40px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #00B6FF;
    padding-top: 1em;
    justify-content: center;
  }
  
  .tldesconto2{
    display: flex;
    color: white;
    font-size: 20px;
   
    justify-content: center;
  }
  
  
  
  
  .livros-desconto{
    display: flex;
    justify-content: space-evenly;
    color: white;
  
  }
  
  .livros-desconto2{
    display: flex;
    justify-content: space-evenly;
    color: white;
    padding-top:10em ;
  
  }
  
  
  .box-livro{
    display: flex;
    flex-direction: column;
    background-color: rgba(97, 169, 212, 0.5);	
    height: 16.5vw;
    width: 15vw;
  
    border-radius: 5px;
  margin-top: 5em;
  }
  
  .img-livro-queridinha{
    padding-top: 15px;
  }
  
  
  
  .box-informacoes-livros{
    padding: 0.5em;
    border-radius: 5px;
  
    background-color: rgba(132,209,222, 0.8);	
  }
  
  .nome-livro-desconto{
    font-size: 12px;
    padding-bottom: 7px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
  }
  .autor-desconto{
    font-size: 12px;
    padding-bottom: 7px;
  
  }
  
  .descontolivro{
      position: absolute;
      margin-left: -13em;
      margin-top: 7.5em;
  }
  
  .preco-descontotr{
    font-size: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
    text-decoration: underline black;
    text-decoration: line-through #00EAFF;
  }
  

  .preco-desconto{
    font-size: 25px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
    text-decoration: underline black;
    text-decoration:wavy;
  }
  
  
  

`

export { ContainerDesconto }