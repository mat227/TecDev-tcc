/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Responsivo } from "./styled";


export default function Header() {
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
        <img src='/assets/images/logoa.png' className="Logo" alt="logo" />
        <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
        >
            <nav className="Nav">
            <a href="/">Home</a>
            <a href="/">Articles</a>
            <a href="/">About</a>
            <button>Logout</button>
            </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
            🍔
        </button>
        </header>
        </Responsivo>
  );
  
}
