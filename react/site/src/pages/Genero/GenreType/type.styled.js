import styled from 'styled-components'

const ContainerGeneros = styled.div`

    margin: 0px;


    background-color: #135578;
    background-image: url('../../assets/images/bacckground.svg');
 


 .titulo {
    display: flex;
    flex-direction: row !important;
  
    justify-content: center;
  
    margin-bottom: -2em;

    text-align: center;
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
      flex-direction: column;
      align-items: center;

      font-family: Rowdies;
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
      justify-content: space-between;
      align-items: center;

      margin-top: 2em;
      margin-bottom: 4em;
  }

a:hover {
    cursor:pointer;
}

a:link {
  text-decoration: none;
}

`

export { ContainerGeneros }