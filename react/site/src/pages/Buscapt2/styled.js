import styled from 'styled-components'

const Container = styled.div`
   

            @font-face {
        font-family: "Rowdies";
        src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
    }

  a, a:link, a:visited {
    text-decoration: none;
    color: white;
    


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
  margin-left:6em;
  margin-bottom:2em;
}



.box-livro{
  display: flex;
  flex-direction: column;
  background-color: rgba(97, 169, 212, 0.5);	
  height: 16.5vw;
  width: 15vw;

  border-radius: 5px;
margin-top: 8em;
margin-right:6em

}

.img-livro-queridinha{
  padding-top: 15px;

display:flex;
justify-content: center;
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








  }
`

export { Container }