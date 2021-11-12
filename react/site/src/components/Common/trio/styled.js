import styled from 'styled-components'


const ContainerTrio= styled.div`



.trio button {
  font-weight: 700;
    background: white;
  border: none;
  border-radius: 150px;
  font-family: "Rowdies";
align-items: center;

  padding: 1.2em;
  margin: 3em 3em 0.5em 3em;
  font-weight: 400;
  cursor: pointer;
}



.trio2{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-family: "Rowdies";
  font-weight: 550;
}

.titilo-trio1, .titilo-trio2{
  display: flex;
}
     
  a, a:link, a:visited {
    text-decoration: none;
    color: white;
    
  }


  @media (max-width: 1024px) {
      box-sizing: border-box;
    
      margin: 0px !important;
      padding: 0px !important;
      width: 100vw !important;
      height: 100vh !important;

      display: flex;
      flex-direction: column;


    .trio {

      padding-right: 105em !important;

    }
  }
`
 export { ContainerTrio }