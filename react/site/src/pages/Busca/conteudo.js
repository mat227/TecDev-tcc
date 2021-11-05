import { Container } from './styled'
import React, { useEffect, useState } from 'react'
import Livros from '../Buscapt2/conteudo'
import Partecima  from "../../components/Common/parteCima/componente"
import Rodape  from "../../components/Common/rodape/redape"

import Api from '../../service/apiLivro'
const api = new Api ();



export default function BuscaDireta(props) {
    const[livro, setLivro] = useState([]);

    let pesquisa = getQuery('search');

    function getQuery(name) {
        return new URLSearchParams(props.location.search).get(name);
    }

    async function listar() {

        let pesquisa = getQuery('search');
        if(pesquisa !== null) {
            const resp = await api.busca(pesquisa);
            setLivro(resp);
        }
    }


    useEffect(() => {
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listar()])

    return (
        <Container>
            <Partecima/>
                <div className="search">
                    <div> Você buscou pelo livro...  <b> " {pesquisa} " </b> </div>
                    <div> Encontramos estes: </div>
                </div>

                <div className="map">
                {livro.map((item) =>
                    < Livros info={item} />
                  )}
                  </div>
                  <Rodape/>
        </Container>
    )
}