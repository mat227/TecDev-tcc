import styled from 'styled-components'


const  Nav = styled.div`
    background-color: #12172B;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    height: 5em;
    justify-content: space-between;
    
    .nomeP{
        color: white;
        margin-left: 2em;
        margin-bottom: 2em;
    }
    .nomeP h1{
        margin-bottom: -0.2em;
    }
    button{
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        background-color: #1fb5cd;
        color : white;

    }
    sair a, a:visited {
        text-decoration: none;
        color: white;
    }
`
export {Nav}