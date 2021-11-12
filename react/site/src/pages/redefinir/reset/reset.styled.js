import styled from 'styled-components'

const ContainerReset = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');


    margin: 0px;
    width: 100vw;
    height: 100vh;


    background-color: #125172;
    background-image: url('/assets/images/bacckground.svg');


.box-1 {
    color: white;
    padding: 1em 1em;;
    -webkit-text-stroke-width: 0.4px; 
    -webkit-text-stroke-color: #341F60; 
}
.titulo h1 {
    font-size: 3em;
    font-weight: 500;
    font-family: "Rowdies";
    margin: 0.5em;
}


.inputs-1, .inputs-2{
    display: flex;
    flex-direction: column;

    width: 500px;

    margin: 2em auto;

    text-align: center;

    font-family: "Quicksand";

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

.inputs-2 input {
    background-color:  rgba(61, 168, 255, 0.7);

    border: none;
    border-radius: 0.5em;

    padding: 0.8em;
    margin: 0.5em; 

    color: white;
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


.esq-logo {
    display: flex;
    flex-direction: row !important;

    /* border: dotted red; */
    
    width: 15vw;

    justify-content: flex-center;

    margin-left: auto;
    margin-top:2em;
}


.esq-logo img {
    margin-left: 1em;
}

.inputs-2 {
    margin-top: -18em;
}

`


export {ContainerReset}