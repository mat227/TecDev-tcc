import styled from 'styled-components'


const Responsivo = styled.div`

.Header {
    top: 0; /* Stick it to the top */
    max-height: 12vh;
    width: 100%;

    display: grid;
    grid-template-areas: "logo nav";

    /* Cosmetics */
    background-color: #12172B;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    
  }
  

  .menu-item img {
    height: 2em;
  }

  .menu-item p{
    justify-content: space-evenly;
  }

  .menu-item {
    display: flex;
    flex-direction: column !important;
    
    align-items: center;

    font-size: 0.8em;
    font-family: "Quicksand";
  }

  .Logo {
    grid-area: logo;
    height: 2em;

    margin: 1em 0.5em;
  }

  .Nav {
    display: grid;
    grid-area: nav;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;
    
  }
  .Nav a {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    transition: 0.5s;
    text-decoration: none;
  }
  .Nav a:hover {
    transform: scale(1.1);
  }
  .Nav button {
    padding: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    transition: 70ms;
  }

  .Nav button:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
  }

  .Burger {
    display: none;
    grid-area: burger;
    margin: 0 20px 0 0;
    padding: 0;
    justify-self: end;
    font-size: 40px;
    border: none;
    background: none;
    outline: none;
    transition: 0.1s;
  }
  .Burger:active {
    transform: scale(1.2);
  }

  


  @media (max-width: 1024px) {
    .Header {
      grid-template-areas: "logo burger" "nav nav";
    }
    .Nav {
      grid-template-rows: repeat(4, 1em);
      grid-template-columns: none;
      grid-row-gap: 1em;

      padding: 2em 0 6em; 

      border: dotted red;
      position: relative;

      background: #12172B;  
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .Burger {
      display: inline;
    }
  

  .NavAnimation-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  .NavAnimation-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 15ms, transform 10ms;
  }
  .NavAnimation-exit {
    opacity: 1;
  }
  .NavAnimation-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 15ms, transform 10ms;
  }

  .menu-item img {
    display: none;
  }

  .menu-item {
    margin-top: 1em;

    display: flex;
    flex-direction: column;

    align-items: center;

    justify-content: space-evenly;
  }
}
 
`
 export { Responsivo }