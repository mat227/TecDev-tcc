/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import { ContainerPartecima } from './styled';
import { Responsivo } from "./styled";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'



import Navbar from './Navbar';
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';


export default function ParteCima2(props) {  
    
        const [search, setSearch] = useState();
        const navig = useHistory();
    
        function keyPress(event) {
    
            if(event.charCode === 13) {
                navig.push(`/busca?search=${search}`);
            }
        }
        
    const [width, height] = useWindowWidthAndHeight();
    return(
        <ContainerPartecima>
        
          <header>
              <div className="header-inner">

                  <Link to="/"> 
                      <div class="hp1-logo">
                        <img src="/assets/images/nice library png 1.svg" alt=""/>
                      </div>
                  </Link>

                  { width > 1000 ?
                    <Navbar navClass="nav-big"
                      linkClassName="nav-big-link"/>
                    :
                    <SmallScreensNavbar navClass="nav-small"
                      linkClassName = "nav-small-link"
                    />
                  } 
              </div>
          </header>

        </ContainerPartecima>
    )

}