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





  

.CSSgal {
	position: relative;
	overflow: hidden;
	height:40vw;
}


.CSSgal .slider {
	height: 100vh;
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
	top: 40vh;
	width: 100vw;
	height: 0;
}

.CSSgal .prevNext > div+div {
	visibility: hidden;
}

.CSSgal .prevNext a {
	background: #00EAFF;
    margin-left: 1em;
    margin-right: 1.5em;

	position: absolute;
	width:       60px;
	height:      60px;
	line-height: 60px; 
	text-align: center;
	opacity: 0.7;
	-webkit-transition: 0.3s;
					transition: 0.3s;
	-webkit-transform: translateY(-50vh);
					transform: translateY(-5vh);
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


#s1:target ~ .slider {transform: translateX(   -100vh); -webkit-transform: translateX(   -13vh);}
#s2:target ~ .slider {transform: translateX(-100vh); -webkit-transform: translateX(-170vh);}





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
	border-radius: 5vh;
	margin: 0 3px;
	color: rgba(0,0,0,0.8);
}





.selecao-livro{
    display: flex;
    flex-direction: column;
    background-color: #0A0F21;
    margin-top: 6em;
  margin-left: 8.5em;
  }
  
  
  
  .box-livros{
    display: flex;
    font-family: "Rowdies";
    color: white;
    display: table-cell;
  height: 50vh;
  width: 30vw;
  padding-top: 3.5em;
  padding-left: -10em;
  }

  
  
  .box-livros2{
    display: flex;
    font-family: "Rowdies";
    color: white;
    display: table-cell;
  height: 50vh;
  width: 40vw;
  padding-top: 3.5em;
  padding-left: none;
  margin-left: -5em;
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