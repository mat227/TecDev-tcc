import { ContainerPartecima } from './styled';
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
           <Link to="/"> <div class="hp1-logo">
                <img src="/assets/images/nice library png 1.svg" alt=""/>
                <img class="hp1-nome" src="/assets/images/Bookly.svg" alt=""/>

            </div></Link>


            <div class="hp1-seus"> 
            <Link to="/login">
              <div class="menu-item">
                    <div class="imagem">
                    <img src="/assets/images/bag.svg" alt="" />
                    </div>
                    <div class="descricao">
                    <p>Sua sacola</p>
                    </div>
                </div>
                </Link>
                <Link to="/login">
                <div class="menu-item">
                    <div class="imagem">
                    <img src="/assets/images/coracaoo.svg" alt="" />
                    </div>
                    <div class="descricao">
                    <p>Seus Favoritos</p>
                    </div>
                </div>
                </Link>
                <Link to="/login">
                <div class="menu-item">
                    <div class="imagem">
                    <img
                        src="/assets/images/profilee (1).svg"
                        alt=""
                        style={{height: 2.8 + "em"}}
                    />
                    </div>
                    <div class="descricao">
                    <p>Login</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
            </ContainerPartecima>
    )
}