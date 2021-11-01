import { Container } from  './indexSyled.js';
import Nav from '../../components/Common/cabecalho perfil/nav.js';
import { ContainerPartecima } from '../../components/Common/parteCima/styled.js';
import Api  from '../../service/api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../../components/Common/rodape/redape.js';
import ParteCima from '../../components/Common/parteCima/componente.js';

const api = new Api();
var popupS = require('popups');
export default function Login(){

    useEffect(()=>{
        console.log('Just one time');
        ListInfo();
    },[])

    const [infoc,setInfoC] = useState([]);

    const ListInfo = async ()  => {
        let r = await api.infoC();
        console.log(r);
        setInfoC(r);
        popupS.alert({
            content: {
                tag: 'div#id.class.class2',
                css: {
                    width: '50vh',
                    background : 'white'
                },
                html: '<h1>Cadsatro</h1>',
                children:[
                    {
                        tag: 'label',
                        text: 'nome',
                        htmlFor: 'input',
                        css: {
                            width: '50%',
                            margin: ' 0 1em 0 0'
                        }
                    },
                    {
                        tag: 'input#input',
                        type: 'text',
                        css: {
                            width: '50%'
                        }
                    }
                ]
                
            }
        });
        
    
    }

    


    return(
        <div>
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
                            {infoc.map( x => 
                                <div class="labels">
                                     <label class="test">Nome: {x.nm_cliente.substring(0,10)}</label>
                                     <label class="test">Sobrenome:  {x.nm_cliente.substring(10,20)}</label>
                                     <label class="test" >Email: {x.ds_email}</label>
                                     <label class="test">Senha: {x.ds_senha}</label>
                                     <label class="test" for="">Endereço : {x.infoc_tdv_enderecos[0].nm_rua}</label>
                                     <label class="test" for="">Complemento : {x.infoc_tdv_enderecos[0].ds_complemento}</label>
                                     <label class="test" for="">Bairro: {x.infoc_tdv_enderecos[0].ds_bairro}</label>
                                     <label class="test" for="">Data de nascimento: {x.dt_nascimento.substring(0,10)}</label>
                                     <label class="test" for="">CPF: {x.ds_cpf}</label>
                                 </div>
                            )}
                           {infoc.map(x =>{
                               <div class="contato">
                                    <h2>Telefone</h2>
                                    <label for="" class="tell">{x.nr_contato/*.substring(0,2)*/}</label>
                                    <label for="" class="tell">{x.nr_contato/*.substring(2,4)*/} - {x.nr_contato/*.substring(4,8)*/}</label>
                            </div>
                           })}
                        </div>         
                </div>
            </Container>
            <Rodape/>
        </div>
    )

}
