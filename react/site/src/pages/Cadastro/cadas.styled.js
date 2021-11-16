import styled from 'styled-components'


const ContainerCadastro = styled.div`

* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
 
  }
  
.box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 8em;
    padding-top: 1em;
    padding-right: 6em;
    padding-bottom: 1em;
   
}
.cadastrar{
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;

}
.cadastrar input{
  border-top: 1px solid #1EA7C3;
  border-left: 1px solid #1EA7C3;
  border-right: 1px solid #1EA7C3;
  border-bottom: 3px solid #1EA7C3;
  outline: none;
  border-radius: 20px;
  background-color:#1EA7C3 ;
  color: white;
  width: 23em;
  height: 2em;
  margin-bottom: 1em;
 margin-right: 2em;
  
}
.Conteiner-cadastrar{
    display: flex;
    flex-direction:column;
    background-color: #103D55;
    background-image: url("/assets/images/Polygon\ 5.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 50em;
  background-position-y: center;
  position: relative;
    background-position-x: right;
  height: 100vh;
  width: auto;
  color: white;
  font-family: "Rowdies";
}

.titulo {
    
color: white;
font-family: "Rowdies";
font-weight: 400;
font-size: 50px;
}

.inputs-criar{
  display: flex;
  justify-content: flex-end;
  overflow-y: auto;

  height: 100%;
}

.inputs-criar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(16,61,85);
    border-radius: 18px;
    background-color: rgb(30,167,195);
  }

  .inputs-criar::-webkit-scrollbar {
    width: 8px;
    background-color: #3e006f;
    border-radius: 10px;
  }

  .inputs-criar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(16,61,85);
  }

.pt-baixo{
  display: flex;
  flex-direction: row;
  padding-left: 30px;
}

.vincular-conta{
  display: flex;
  flex-direction: row;
}



button {
  font-weight: 710;
  
  color: #fff;
  background: #2FAEC8;
  
  border: none;
  border-radius: 20px;
  font-family: "Rowdies";

  padding: .7em 2em;
  margin: .3em;
  font-weight: 400;


  cursor: pointer;
}

button:hover {
  background-color: #2FAEC8;
}


@media (max-width : 1024px) {

    padding: 0px;
    margin: 0px;
    width: 100%;

  .titulo{
    margin-left: -3em;
    font-size: 2em;
  }

  .img-logo img{
    height: 2.5em; 
    margin-left: 3em;
  }

  .cadastrar{
    font-size: 1em;
  }

  input{
    margin-top: 1em;
   
  }

  .vincular-conta{
    height: 1.5em;
    margin-right: 1em;
  }

  botao{
 
    margin-right: 1em;
  }
}
`


export { ContainerCadastro }