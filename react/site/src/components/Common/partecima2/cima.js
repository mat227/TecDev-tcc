

import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
//import $ from 'jquery';


 
export default function ParteCima2(props) {
    const [search, setSearch] = useState();
    const navig = useHistory();

    function keyPress(event) {

        if(event.charCode === 13) {
            navig.push(`/busca?search=${search}`);
        }
    }

   // $(function () {
        
    //    $(".button-collapse").sideNav();
     // });

    return (
            <div className="oi">


        
            <nav>
              <div class="nav-wrapper">
                <Link to="#" class="brand-logo" style={{alignItems: "center!important"}}>
                  <img src="/assets/images/nice library png 1.svg" alt="" style={{height: 1 + "em"}} />
                  <img src="/assets/images/Bookly.svg" alt="" style={{height: 1 + "em"}} />
                </Link>
                <Link to="#" data-activates="menu-mobile" class="button-collapse">
                  <i class="material-icons" style={{margin: 0.1 + "em" -0.22 + "em"}}
                    ><img src="/assets/images/botao de menu.png" alt=""
                  /></i>
                </Link>

                <ul class="right hide-on-med-and-down">
                <Link to="/login">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }}>
                             <img src="/assets/images/profilee (1).svg" alt="" style={{height: 2 + "em"}}/>
                            <p style={{color: "red", marginTop: -1 + "em"}}>Login</p>
                        </li>
                  </Link>
                  <Link to="/login">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }}>
                            <img src="/assets/images/profilee (1).svg" alt="" style={{height: 2 + "em"}}/>
                            <p style={{color: "red", marginTop: -1 + "em"}}>Login</p>
                        </li>
                  </Link>
                  <Link to="/login">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }}>
                            <img src="/assets/images/profilee (1).svg" alt="" style={{height: 2 + "em"}}/>
                            <p style={{color: "red", marginTop: -1 + "em"}}>Login</p>
                        </li>
                  </Link>
                  <Link to="/adm_livro">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center",margin: 1 + "em" }}>
                            <button style={{background: "skyblue", color: "black"}}>
                                ADM
                            </button>
                        </li>
                  </Link>
                </ul>

                <ul class="side-nav" id="menu-mobile" style={{width: 30 + "vh"}}>
                  <li
                    style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }} >
                    <a href="#"><img src="/assets/images/bag.svg" style={{height: 2 + "em"}} /></a>
                    <p style={{color: "red", marginTop: -1 + "em"}}>Sua sacola</p>
                  </li>
                  <Link to="/login">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }}>
                            <img src="/assets/images/coracaoo.svg" alt="" style={{height: 2 + "em"}}/>
                            <p style={{color: "red", marginTop: -1 + "em"}}>Seus Favoritos </p>
                        </li>
                  </Link>
                  <Link to="/login">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center", margin: 1 + "em" }}>
                            <img src="/assets/images/profilee (1).svg" alt="" style={{height: 2 + "em"}}/>
                            <p style={{color: "red", marginTop: -1 + "em"}}>Login</p>
                        </li>
                  </Link>
                  <Link to="/adm_livro">
                        <li style={{ display: "flex", flexDirection: "row !important", alignItems: "center",margin: 1 + "em" }}>
                            <button style={{background: "skyblue", color: "black"}}>
                                ADM
                            </button>
                        </li>
                  </Link>
                </ul>
              </div>
            </nav>
        </div>
        
    )
}