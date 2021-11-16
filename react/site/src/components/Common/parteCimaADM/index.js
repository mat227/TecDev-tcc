import { ContainerPartecima } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useState } from 'react';



 
export default function ParteCima(props) {
    const [search, setSearch] = useState();
    const navig = useHistory();

    function keyPress(event) {

        if(event.charCode === 13) {
            navig.push(`/busca?search=${search}`);
        }
    }

    return (
            <ContainerPartecima>
            <div class="hp1-buscap">
           <Link to="/homepage"> <div class="hp1-logo">
                <img src="/assets/images/nice library png 1.svg" alt=""/>
                <img class="hp1-nome" src="/assets/images/Bookly.svg" alt=""/>

            </div></Link>

        
                <Link to="/login">
             <button className="btadm">Sair</button>
             </Link>
        </div>
            </ContainerPartecima>
    )
}