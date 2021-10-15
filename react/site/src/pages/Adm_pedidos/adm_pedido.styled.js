import styled from 'styled-components'


const ContainerAdm_pedidos = styled.div`

* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
    background-color: #1e4f63;
    background-image: url("../Perfil_ADM/assets/images/fundo.svg");
  }

.container {
    color: #fff;
}


.cabecalho {
    background-color: #12172b;
    display: flex;
    flex-direction: row;
   
   
    height: 7em;
}


.adicionar img {
    position: absolute;
    top: 1.5em;
    left: 3em;

    width: 35px;

}

.bola img {
    position: relative;

    top: 0.4em;
    left: 1em;
    width: 100px;
}

.adicionar_foto {
    position: absolute;
    top: 5.3em;
    left: 2.5em;
    font-family: 'Baloo Thambi 2';

    font-size: 12px;
    color: #fff;
}

.nome_adm {
    display: flex;
    flex-direction: column;

    margin-left: 2em;

    color: #fff;
    font-family: 'Baloo Thambi 2';
}

.nome {
    font-family: 'Baloo Thambi 2';
    font-size: 40px;
    margin-top: 0.5em;
}


.box_g {
    display: flex;
    flex-direction: row;

    padding-top: 10px;
    padding-left: 20px;
}

.conteudo_esquerdo {
    background-color: #183c53;
    width: 10em;
    height: 30em;

    border-radius: 10px;
}

.informacao {
    font-family: 'Baloo Thambi 2';

    display: flex;
    flex-direction: column;
}

.botao_e button {
    color: #fff;
    background: #226dae;
    font-family: 'Baloo Thambi 2';
    font-size: 16px;
    
    border: none;
    align-items: center;
    cursor: pointer;
  
    padding: .5em;
    margin-top: 1em;
    margin-left: 0em;
    width: 10em;
  }

.botao1 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 5em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}

.botao2 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 2em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}

.botao3 button {
    background-color: #183c53;
    font-family: 'Baloo Thambi 2';
    color: #fff;
    font-size: 16px;

    border: none;
    align-items: center;
    cursor: pointer;

    margin-top: 1em;
    padding-bottom: 2em;
    
    margin-left: 0em;
    width: 10em;
}


.conteudo_direito {
    background-color: #183c53;
    width: 65em;
    height: 30em;
    margin-left: 1.5em;
    border-radius: 10px;
}

.box {
    display: flex;
    flex-direction: column;

    margin-left: 1em;
    margin-top: 1em;
    width: 63em;
    height: 28em;

    background-color: #21659f;

    border-radius: 10px;
}

.titulo {
    display: flex;
    flex-direction: row;

    margin-top: 2em;
    margin-left: 1em;
}

.pedidos_img img {
    width: 1.5em;
    height: 1.5em;
    margin-left: 2em;
}

.pedidos {
    font-family: 'Baloo Thambi 2';
    font-size: 20px;
    margin-left: 1em;
}


.divBusca input{
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid;
  outline: none;
  background-color:#183c53;

  width: 10em;
  height: 1em;
}

::placeholder{
    color: white;
}

.divBusca{
    display: flex;
    flex-direction: row;
    background-color:#183c53;
  
    margin-left: 3em;
    margin-top: 1em;

    border-radius:10px;
    width:20em;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
  }
  
  .divBusca button{
    margin-top: 0.2em;
    border: none;
    background-color: #183c53;
    border-radius: 20px;
    cursor: pointer;
}

 
#txtBusca{
    float:left;
    background-color:transparent;
    padding-left:10px;
    font-size:14px;
    border:none;
    height:32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    width: 35.5em;
  
}



thead {
    background-color: #183c53;
    border:solid 1px;
}

table {
   margin-top: 2em;
   border:solid 1px;
}


td {
   text-align: left;
   height: 1em;
   padding: 1em;
   color: #6D6868;
   font-weight: 600;

   font-family: 'Roboto', sans-serif;
}

.white {
   background-color: #21659f;
}

th {
   height: 2em;
   text-align: left;
   padding: 1em;
   color: #ffff;
   font-weight: 800;

   font-family: 'Roboto', sans-serif;
} 

.table-user {
   border-collapse: collapse;
}

.int {
   background-color: #21659f;
}

.a {
   width: .1em;
}

button {
    cursor: pointer;
    border: none;
    background-color: #21659f;
}

button img {
    height: 2em;
}



.redes {
    display: flex;
    flex-direction: row;

    margin-top: 2em;
    background-color: #12172b;

    width: 79em;
    height: 4.5em;
}

.logo {
  display: flex;
  flex-direction: column;

  margin-left: 2em;
  margin-top: 1em;
}

.img_logo img {
  width: 6em;
  
}

.redes_sociais {
    display: flex;
    flex-direction: row;
    
    margin-left: 65em;
    margin-top: 1.5em;
}

.tecdev {
    color:#9FD4EF;
}

.instagram img, .facebook img {
    width: 1.5em;
    height: 1.5em;
    
    margin-left: 1em;
}

`
export { ContainerAdm_pedidos }