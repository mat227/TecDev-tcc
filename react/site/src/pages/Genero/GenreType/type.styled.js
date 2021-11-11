import styled from 'styled-components'

const ContainerGeneros = styled.div`



    background-color: #135578;
    background-image: url('../../assets/images/bacckground.svg');
 font-family: "Rowdies";


 .titulo {
    display: flex;
    flex-direction: row !important;
  
    justify-content: center;
  
    margin-bottom: -2em;

    text-align: center;
  }
  
  .titulo p {
    color:white;
    font-family: "Rowdies";
    font-size: 4em;
    font-weight: 600;
    text-shadow: 2px 3px black;
  
      -webkit-text-stroke-width: 0.5px; 
      -webkit-text-stroke-color: #00B6FF;
    } 
  
.back {
  color: white;
  font-family: "Quicksand";
  font-size: 20px !important;

  -webkit-text-stroke: none;
}

.back:hover {
  text-decoration: underline aquamarine;
}

.back img {
  height: 0.6em;
  margin-right: 0.2em;

      -webkit-text-stroke-width: 0.5px; 
      -webkit-text-stroke-color: #00B6FF;
}


  .quadrado {
    width: 80px;
    height: 2px;
    background: #6ECAEF ;
    margin-top: 6.5em;
  }


  .box {
      background-color: #61aad49c;
      

      padding: 1em;
      width: 17vw;
      margin: 1em;

      display: flex;
      flex-direction: row;
      align-items: center;

      font-family: "Rowdies";
      text-align: center;
      color: white;
      line-height: 1.8em;

      border-radius: 5px;
  }

.infobox {
    width: 16.5em;
    background-color: #84d1ddaa;

    padding-bottom: 1em;
    padding-top: 1em;
    margin-top: 1em;
    margin-bottom: -1em;
    
    border-radius: 5px;
}

  h3, h2 {
    -webkit-text-stroke: black;
    -webkit-text-stroke-width: 1px;
  }

  h2 {
      text-decoration: underline black; 
  }

  .boxes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;

      margin-top: 2em;
      margin-bottom: 4em;
  }

  a, a:link, a:visited {
    text-decoration: none;
    color: white;
  }
  
.livros-desconto{
    display: flex;
flex-wrap: wrap;
flex-direction:row;
  color: white;
  height: 20vh;
  
  }
  
 
  
  
  .box-livro{
    display: flex;
    flex-direction: column;
    background-color: rgba(97, 169, 212, 0.5);	
    width: 15vw;
  margin-left: 0em;
    border-radius: 5px;
    margin-left: 7em;
  margin-top: 5em;
  }
  
  .img-livro-queridinha{
    padding-top: 15px;
    padding-left: 10px;
  }
  
  
  
  .box-informacoes-livros{
    padding: 0.5em;
    border-radius: 5px;
  
    background-color: rgba(132,209,222, 0.8);	
  }
  
  .nome-livro-desconto{
    font-size: 13px;
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
      margin-left: -2.5em;
      margin-top:-3.25em;
  }
  
  .preco-descontotr{
    font-size: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
    text-decoration: underline black;
  }
  

  .preco-desconto{
    font-size: 25px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
    text-decoration: underline black;
    
    text-decoration:wavy;
  }
  
  
`

export { ContainerGeneros }