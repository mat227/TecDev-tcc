import styled from 'styled-components'


const ContainerLogin = styled.div`
  

    display: flex;
    flex-direction: row;
    font-family: "Rowdies";


* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
  }




.login-em input , .login-sn input{
border-top: 1px solid transparent;
border-left: 1px solid transparent;
border-right: 1px solid transparent;
border-bottom: 3px solid white;
outline: none;
background-color:#0A0F21 ;
color: white;
width: 34.2em;
height: 3em;
font-size: medium;

}

.login-em, .login-sn{
    padding-left: 3em;
}

::placeholder{
font-size: 10px;
color:gray;
}

.inputs-login{
display: flex;
flex-direction: column;
background-color: #0A0F21;
 width: 48em;
 height: 100vh;

color: white;
font-family: "Rowdies";
font-weight: 400;
}
.senha_login, .email_login {
    padding: 1.5em 1.5em 1.5em 2.4em;
    font-size: 20px;
}
.logo{
    padding: 3em;
    padding-top: 2em;
}
.titulo{
    font-size: 50px;;
    padding-left: 0.9em;

}

.pt-baixo{
    display: flex;
    flex-direction: row;
}
.esqueceu-senha{
    font-size: 13px;
    font-weight: 0;
    padding-left: 3.6em;
}
.criar-conta{
    font-size: 13px;
    font-weight: 0;
    padding-left: 27.5em;
   
}
a, a:link, a:visited {
    text-decoration: none;
    color: white;
  }
  
.logo2{
    background-image: url("/assets/images/lo-fundo.svg");
    background-repeat: no-repeat;
    background-position-y: center;
    background-size: 100%;
    width: 40em;
   height: 100vh;
}


.logoLivro {
    display: flex;
    justify-content: center;
    padding-top: 13em;
    padding-left: 4em;

}
.logo img:hover{

    
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);

}


.botao{
padding-left: 31.5em;
padding-top: 60px;
}



button {
    font-weight: 700;
    
    color: #fff;
    background: #0E9FE2;
    
    border: none;
    border-radius: 20px;
    font-family: "Rowdies";

    padding: .5em 1.65em;
    margin: .3em;
    font-weight: 400;


    cursor: pointer;
}

button:hover {
    background-color: #0E9FE2;
}

@media (max-width : 1024px) {
    .logo2.svg{ 
        display: none;
    }

    .logoLivro{
        display: none;
    }
    
    .logo{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

      padding: 0px;
      margin: 0px;
      width: 100%;
    } 
    .inputs-login{ 
        padding: 2em;
    }
    .titulo{ 
     font-size: 2.5em;
     color: white;
    }
    .login {
     width: 100%;
    }

    .login-em{ 
     flex-direction: column;
     width: 50%;
    }
}
`

export { ContainerLogin }