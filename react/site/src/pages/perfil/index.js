 import { Container } from  './indexSyled.js';
 import Nav from '../../components/Common/cabecalhoperfil/nav.js';
 import { ContainerPartecima } from '../../components/Common/parteCima/styled.js';
 import Api  from '../../service/apiUsuario.js';
 import { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';
 import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
 import Rodape from '../../components/Common/rodape/redape.js';
 import ParteCima from '../../components/Common/parteCima/componente.js';

 
 function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado == null) {
        navigation.push('/')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}


 const api = new Api();
 export default function Login(){
   
   // const [nome, setNome]  = useState('');
   // const [email, setEmail] = useState('');
   // const [danasc, setData] =  useState('');
   // const [cpf, setCpf ]= useState('');
   // const [numero, setNumero] = useState('');    
   // const [mud, setMud] = useState(false);
   // const [rua , setRua ] = useState('');
   // const [complemento, setComplemento] = useState('');
   // const [bairro , setBairro] = useState('');
   const nav = useHistory();

   const usuarioLogado = lerUsuarioLogado(nav) || {};

   const [info, setInfo] = useState(JSON.parse(Cookies.get('usuario-logado')))
    console.log(info);

    //const ListInfo = async ()  => {
        // let r = await api.infoC();
  //       console.log(r);
  //       setInfo(r);
     //}


     const altInfo = async () => {
     
     }

     const deslogar = () => {
        Cookies.remove('usuario-logado');
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
                                     <div class="btnE"><button onClick={altInfo()}>Editar <br/>informações</button></div>
                                 </div>
                             </div>
                                 <div class="labels">
                                      <label class="test">Nome: {info.nm_cliente}</label>
                                      <label class="test" >Email: {info.ds_email}</label>
                                      <label class="test" for="">Endereço : {info.nm_rua}</label>
                                      <label class="test" for="">Complemento : {info.ds_complemento}</label>
                                      <label class="test" for="">Bairro: {info.ds_bairro}</label>
                                      <label class="test" for="">Data de nascimento: {info.dt_nascimento.substring(0,10)}</label>
                                      <label class="test" for="">CPF: {info.ds_cpf}</label>
                                  </div>
                                <div class="contato">
                                     <h2>Telefone</h2>
                                     <label for="" class="tell">{info.nr_contato}</label>
                             </div>
                         </div>         
                 </div>
             </Container>
             <Rodape/>
         </div>
     )

 }
