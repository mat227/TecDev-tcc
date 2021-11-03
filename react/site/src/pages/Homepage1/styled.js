import styled from 'styled-components'


const ContainerHome = styled.div`
     min-height: 100%;
            background-image: url('/assets/images/bacckground.svg');
            background-color: #125375;

  a, a:link, a:visited {
    text-decoration: none;
    color: white;
    
  }
  
  

  .conteiner-homepage1{
    display: flex;
    flex-direction: column;
    font-family: "Rowdies";
   

    
}



     
.oferta-da-semana{
  display: flex;
  flex-direction: column;
  height: 250vh;
  opacity: 100%;
}

.trio{
  padding-left:27em;
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
height: 50vh;
width: 40vw;
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
  margin-top: -15em;
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
  height: 50vh;
width: 100vh;
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
  height: 16.5vw;
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










.CSSgal {
	position: relative;
	overflow: hidden;
	height:40vw;
}


.CSSgal .slider {
	height: 100%;
	white-space: nowrap;
	font-size: 0;
	transition: 0.8s;
}


.CSSgal .slider > * {
	font-size: 1rem;
	display: inline-block;
	white-space: normal;
	vertical-align: middle;
	background-size: cover;
}


.CSSgal .prevNext {
	position: absolute;
	z-index: 1;
	top: 50%;
	width: 100vw;
	height: 0;
}

.CSSgal .prevNext > div+div {
	visibility: hidden;
}

.CSSgal .prevNext a {
	background: #fff;
	position: absolute;
	width:       60px;
	height:      60px;
	line-height: 60px; 
	text-align: center;
	opacity: 0.7;
	-webkit-transition: 0.3s;
					transition: 0.3s;
	-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
	left: 0;
}
.CSSgal .prevNext a:hover {
	opacity: 1;
}
.CSSgal .prevNext a+a {
	left: auto;
	right: 0;
}


.CSSgal .bullets {
	position: absolute;
	z-index: 2;
	bottom: 0;
	padding: 10px 0;
	width: 100vw;
	text-align: center;
}
.CSSgal .bullets > a {
	display: inline-block;
	width:       30px;
	height:      30px;
	line-height: 30px;
	text-decoration: none;
	text-align: center;
	background: rgba(255, 255, 255, 1);
	-webkit-transition: 0.3s;
					transition: 0.3s;
}
.CSSgal .bullets > a+a {
	background: rgba(255, 255, 255, 0.5); 
}
.CSSgal .bullets > a:hover {
	background: rgba(255, 255, 255, 0.7) !important;
}


.CSSgal >s:target ~ .bullets >* {      background: rgba(255, 255, 255, 0.5);}
#s1:target ~ .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2:target ~ .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}

.CSSgal >s:target ~ .prevNext >* {      visibility: hidden;}
#s1:target ~ .prevNext >*:nth-child(1) {visibility: visible;}
#s2:target ~ .prevNext >*:nth-child(2) {visibility: visible;}


#s1:target ~ .slider {transform: translateX(   -0vh); -webkit-transform: translateX(   -9vh);}
#s2:target ~ .slider {transform: translateX(-100vh); -webkit-transform: translateX(-164vh);}



.CSSgal{
	color: #fff;	
	text-align: center;
}
.CSSgal .slider h2 {
	margin-top: 10vh;
	font-weight: 200;
	letter-spacing: -0.06em;
	font-size: 3em;
}

.CSSgal a {
	border-radius: 50%;
	margin: 0 3px;
	color: rgba(0,0,0,0.8);
}
`

export { ContainerHome }