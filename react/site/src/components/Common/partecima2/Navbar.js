import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({navClass, linkClassName}) =>(
    <NavComponent navClass={navClass}
    linkClassName = {linkClassName} />
);

export const NavComponent = ({onClick, navClass, linkClassName})=>(
  <nav className={navClass}>
      {["Sua sacola", "Seus favoritos", "Login"].map(section=>
        <Link to={section}
              smooth={true}
              className={linkClassName}
              onClick={onClick}>
            {section}
        </Link>
      )}
  </nav>
)
export default Navbar;