import styled from 'styled-components'

const ContainerEsqueceu = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');


    margin: 0px;
    width: 100vw;
    height: 100vh;

    background-image: url('assets/images/aaaaaaaaaaa.png');
    background-repeat: no-repeat;

    background-color: #125172;


.logo img {
    margin-left: 73em;
    margin-top: 5em;
    height: 5em;

    cursor: pointer;
}

.box-1 {
    color: white;
    padding: 1em 1em;;
    -webkit-text-stroke-width: 0.4px; 
    -webkit-text-stroke-color: #341F60; 
}
.titulo h1 {
    font-size: 3em;
    font-weight: 500;
    font-family: Rowdies;
}
.subtitulo h3 {
    font-size: 2em;
    font-family: "Quicksand";
    margin-top: -1em;
    margin-bottom: 2em;
}


.inputs-1, .inputs-2 {
    display: flex;
    flex-direction: column;

    width: 500px;

    margin: auto;

    text-align: center;

    font-family: Quicksand;

    color: white;
}

.inputs-1 input {
    background-color:  rgba(61, 168, 255, 0.7);

    border: none;
    border-radius: 0.5em;

    padding: 0.8em;
    margin: 0.5em; 

    color: white;
}

.inputs-2 {
    text-decoration: underline;
}


  

button {
    background: rgba(61, 168, 255, 0.7);

    border: none;
    border-radius: 0.5em;

    color: white;
    font-size: 1em;
    
    width:10em;

    padding: 1em 0.8em;
    
    align-self: center;
    
    margin-bottom: 1em;
    margin-top: 1em;

    cursor: pointer;
}

button:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

img:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.inputs-2 input{
    width: 70px;
    height: 70px;

    text-align: center;
    font-size: 1em;
    
    border: none;
    border-radius: 0.5em;
    border: 1px solid rgba(255, 255, 255, 0.679);

    background-color: #054b7e;
    color: white;

    margin-left: 2.5em;
}

.row {
    display: flex;
    flex-direction: row !important;
    margin-top: 1.5em;
}

    


`

export { ContainerEsqueceu }