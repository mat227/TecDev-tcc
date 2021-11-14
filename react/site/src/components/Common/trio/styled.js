import styled from 'styled-components'


const ContainerTrio = styled.div`

display: flex;
align-self: center;

margin: 1em;


.duo {
  display: flex;
  flex-direction: row;

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