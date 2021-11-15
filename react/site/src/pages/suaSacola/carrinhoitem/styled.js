import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  font: 700 1em "Rowdies";

 
  .remover img {
    width: 3em;
    cursor: pointer;
  }
`

const RemoverIcon = styled.img`
  content: url('/assets/images/delete.svg')
`


export { Container, RemoverIcon }