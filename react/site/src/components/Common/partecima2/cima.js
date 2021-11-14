/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import { Responsivo } from "./styled";
import { Link } from 'react-router-dom'

// import BarraA  from './busca.conteudo.js'

export default function Header(props) {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
      <Responsivo>
        <header className="Header">
          <div className="logoo">
            <img src="/assets/images/nice library png 1.svg" className="Logo" alt="logo" />
            <img src="/assets/images/Bookly.svg" className="Logo" alt="logo" />
          </div>
        {/* <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
            classNames="NavAnimation"
            unmountOnExit
        > */}
            
           {/* <BarraA /> */}

            <nav className="Nav">
              <Link to="/login">
                <div className="menu-item">
                  <img src="/assets/images/bag.svg" alt="" />
                  Sua Sacola
                </div>
              </Link>
              <Link to="/login">
                <div className="menu-item">
                <img src="/assets/images/coracaoo.svg" alt="" />
                  Seus Favoritos
                </div>
              </Link>
              <Link to="/login">
                <div className="menu-item">
                  <img src="/assets/images/profilee (1).svg" alt=""  />
                  Login
                </div>
              </Link>
              <Link to="/adm_livro">
                <button>ADM</button>
              </Link> 
            </nav>
       {/* </CSSTransition> */}
        <button onClick={toggleNav} className="Burger">
            🍔
        </button>
        </header>
        </Responsivo>
  );
  
}
