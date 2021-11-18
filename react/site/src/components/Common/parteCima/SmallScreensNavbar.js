import React, { useState } from 'react';
import { NavComponent } from './Navbar';

const SmallScreensNavbar = () =>{
    // declare 'translate' as a state variable
    let [translate, setTranslate ] = useState(true);
    return(
        <div> 
             <button className="hamburger-btn"
                     onClick= {()=> setTranslate(!translate)}>  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */} 
                 {translate?<span>&#9776;</span>:<span>&times;</span>}
             </button>
             {/*hide and show the sidebar list based on whether translate is true or false*/}
             <div id="sidebar-list" className={`${translate? "addTransiton": "removeTransition"}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName = "nav-small-link"
                    onClick = {()=>setTranslate(true)}  //set translate to true to hide the sidebar list
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar;