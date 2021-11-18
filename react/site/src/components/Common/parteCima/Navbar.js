import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({navClass, linkClassName}) =>(
    <NavComponent navClass={navClass}
                  linkClassName = {linkClassName}
    />
);

export const NavComponent = ({onClick, navClass, linkClassName})=>(
  <nav className={navClass}>
      {["Minha conta", "Sua sacola", "Seus favoritos", "Sair"].map(section=>
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