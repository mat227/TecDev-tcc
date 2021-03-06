import styled from 'styled-components'


const ContainerPartecima= styled.div`


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
        height:15vh;

        justify-content: space-between;
    }

    .hp1-seus{
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin-right: 1em;
        margin-top: 0.2em;;
    }
    
    

    .divBusca input{
      border-top: 0px solid;
      border-left: 0px solid;
      border-right: 0px solid;
      border-bottom: 0px solid;
      outline: none;
      color:white;
    }

    #txtBusca::placeholder{
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
        width: 10em;
      }


.menu-item {
  display: flex;
  flex-direction: column;

  text-align: center;

  margin: 1em 0.5em;
}

.descricao {
  font-family: "Quicksand";
  color: white;
  font-size: 0.8em;
}

a:Link, a:visited {
  text-decoration: none;
}
.btadm{
            border: #1FB5CD;
            background: #1FB5CD;
            padding: 0.5em;
            color: white;
            width: 5vw;
            height: 3em;
            text-align: center; 
            margin-top: 1em;     
            border-radius: 0.3em;
        }

`
 export { ContainerPartecima }