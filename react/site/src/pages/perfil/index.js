import { Container } from  './indexSyled.js';
import Nav from '../../components/Common/cabecalho perfil/nav.js';
import { ContainerPartecima } from '../../components/Common/parteCima/styled.js';
import Api  from '../../service/api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../../components/Common/rodape/redape.js';
import ParteCima from '../../components/Common/parteCima/componente.js';
const api = new Api();
export default function Login(){

    useEffect(()=>{
        console.log('Just one time');
        ListInfo();
    },[])

    const [infoc,setInfoC] = useState([]);

    const ListInfo = async ()  => {
        let r = await api.infoC();
        setInfoC(r);
    }

    return(
        <div>
                            <ParteCima/>

            <Nav nome='Usuario' />

            <Container >
                <ContainerPartecima/>
                
                <div class="faixaUm">
                    <div class="colunas especial"><Link to='/suas_infomacoes' ><label>Suas informaçoes</label></Link></div>
                    <div class="colunas"><Link to='/favoritos' ><label>Seus favoritos</label></Link></div>
                    <div class="colunas"><Link to='/suasacola' ><label>Sua sacola</label></Link></div>
                    <div class="colunas"><Link to='/seus_pedidos' ><label>Seus pedidos</label></Link></div>

                </div>

                <div class="faixaDois">
                    <div class="aux2">                      
                            <div class="titulo">
                                <h1>Suas informações</h1>
                                <div class="btn">
                                    <div class="btnE"><button>Editar <br/>informações</button></div>
                                </div>
                            </div>
                            <div class="labels">
                                <label class="test">Nome:</label>
                                <label class="test">Sobrenome</label>
                                <label class="test" >Email</label>
                                <label class="test">Senha</label>
                                <label class="test" for="">Endereço</label>
                                <label class="test" for="">Complemento</label>
                                <label class="test" for="">Bairro</label>
                                <label class="test" for="">Data de nascimento</label>
                                <label class="test" for="">CPF</label>

                            </div>
                            <div class="contato">
                                <h2>Telefone</h2>
                                <label for="" class="tell">__</label>
                                <label for="" class="tell">___ - ____</label>
                            </div>
                        </div>         
                </div>
            </Container>
            <Rodape/>
        </div>
    )

}
