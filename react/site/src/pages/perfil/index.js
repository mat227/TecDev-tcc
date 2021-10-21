import { Container } from  './indexSyled.js';
import Nav from '../../components/Common/cabecalho perfil/nav.js';
import { ContainerPartecima } from '../../components/Common/parteCima/styled.js';
import Api  from '../../service/api.js';
import { useEffect, useState } from 'react';
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
            <Nav nome='Usuario' />
            <Container >
                <ContainerPartecima/>
                <div class="faixaUm">
                    <div class="colunas especial"><label>Suas informaçoes</label></div>
                    <div class="colunas"><label>Seus favoritos</label></div>
                <a href="../SuaSacola/index.html"> <div class="colunas"><label>Sua sacola</label></div></a> 
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
                            </div>
                            <div class="contato">
                                <h2>Telefone</h2>
                                <label for="" class="tell">__</label>
                                <label for="" class="tell">___ - ____</label>
                            </div>
                        </div>         
                </div>
            </Container>
        </div>
    )

}
