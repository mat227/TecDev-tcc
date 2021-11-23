import styled from 'styled-components'


const ContainerHome = styled.div`
            background-image: url('/assets/images/bacckground.svg');
            background-color: #125375;

  a, a:link, a:visited {
    text-decoration: none;
    color: white;

  }
  
  

  .conteiner-homepage1{
    display: flex;
    min-height: 220vh;
    flex-direction: column;
    font-family: "Rowdies";
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


.trio2{
  display: flex;
  flex-direction: row;
  color: white;
  font-family: "Rowdies";
  font-weight: 550;
  margin-left: -2.5em;
}

.titilo-trio1, .titilo-trio2,.titilo-trio3{
  display: flex;
  padding-left: 4em;
}




.selecao-livro{
  display: flex;
  flex-direction: column;
  background-color: #0A0F21;
  margin-top: 6em;
margin-left: 8em;
}



.box-livros{
  display: flex;
  font-family: "Rowdies";
  color: white;
  display: table-cell;
padding-top: 3.5em;
padding-left: none;
text-align: center;
}

.imgt{
  display: flex;
  flex-direction: column;
  font-family: "Rowdies";
margin-left: -6em;
}

.imgt img{
  border: 1px dotted;
}

.box-precos{
  display: flex;
  flex-direction: row-reverse;
  font-family: "Rowdies";
  margin-right: 2em;
}

.preco-de, .por{
  padding-top: 1.5em;
}

.botao-preco{
  padding-top: 2em;
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



.img-livro-queridinha{
  display: flex;
    justify-content: center;
  }


.tlqueridinhas1{
  display: flex;
  color: white;
  flex-direction:row;

  font-size: 30px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #00B6FF;
  padding-top: 1em;
  justify-content: center;
}

.tlqueridinhas2{
  display: flex;
  color: white;
  font-size: 20px;

  justify-content: center;
}




.livros-queridinhas{
  display: flex;
flex-wrap: wrap;
flex-direction:row;
  color: white;
  height: 20vh;
  max-width:100% ;
  margin-left:6em
}



.box-livro{
  display: flex;
  flex-direction: column;
  background-color: rgba(97, 169, 212, 0.5);	
  width: 15vw;

  border-radius: 5px;
margin-top: 5em;
margin-right:6em

}

.img-livro-queridinha{
  padding-top: 15px;
}



.box-informacoes-livros{
  padding: 0.5em;
  border-radius: 5px;

  background-color: rgba(132,209,222, 0.8);	
}

.nome-livro-queridinhas{
  font-size: 12px;
  padding-bottom: 7px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:black;
}
.autor-queridinhas{
  font-size: 12px;
  padding-bottom: 7px;

}


.preco-queridinhas{
  font-size: 25px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:black;
  text-decoration: underline black;

}



@media (max-width: 1024px) {
  width: 100%;
  height: 100%;


  .queridinhas {
    background-color:red; 

    text-align: center;

    margin: 1em;
  }

  
}


`

export { ContainerHome }