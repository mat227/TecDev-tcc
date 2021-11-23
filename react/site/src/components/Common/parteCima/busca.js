import React, { useState } from "react";
import { useHistory } from 'react-router';

import {StyledBarra} from './busca.styled'

export default function BarraA() {

    const [search, setSearch] = useState();
    const navig = useHistory();
  
    function keyPress(event) {
  
      if(event.charCode === 13) {
          navig.push(`/busca?search=${search}`);
      }
    }
  
  
    return (
        <StyledBarra>
            <div class="hp1-busca">
                <div class="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar..."  value={search} onChange={ e => setSearch(e.target.value) } onKeyPress={keyPress} />
                    <button><img src="/assets/images/lupa.svg" id="btnBusca" alt="Buscar" /></button>
                </div>
            </div>
        </StyledBarra>
    )
};
