import styled from 'styled-components'


const  Nav = styled.div`
    background-color: #12172B;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    height: 7em;
    .alt_img{
        position: absolute;
        top: 4.5em;
        font-size: 0.9em;
        color: rgb(255, 255, 255);
        border: 1px solid skyblue;
    }
    .imgP img {
        border-radius: 50%;
        width: 6em;
        height: 6em;
    }
    .nomeP{
        color: white;
        margin-left: 2em;
        margin-bottom: 2em;
    }
    .nomeP h1{
        margin-bottom: -0.2em;
    }
`
export {Nav}