import styled from 'styled-components'


const ContainerTrio= styled.div`
display: flex;
flex-direction: column;
align-items: center;
const ContainerTrio = styled.div`

display: flex;
align-self: center;

margin: 1em;

.trio button {
  font-weight: 700;
    background: white;
  border: none;
  border-radius: 150px;
  font-family: "Rowdies";

  padding: 1.2em;
  margin: 3em 3em 0.5em 3em;
  font-weight: 400;
  cursor: pointer;
}

.duo {
  display: flex;
  flex-direction: row;
  color: white;
  font-family: "Rowdies";
  font-weight: 550;

  height: 16vh;
  width: auto;
}

.duo-item {
  display: flex;
  flex-direction: column;

  margin: 1em;
  text-align: center !important;
}

button {
  background-color: white;

  border-radius: 55%;
  border: none;

  padding: 1em;

  justify-self: center;

  display: flex;
}

button:hover {
  cursor: pointer;
}




`
 export { ContainerTrio }