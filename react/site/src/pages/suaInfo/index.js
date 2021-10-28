import { Container  } from "./indexStyled.js";
import ParteCima from "../../components/Common/parteCima/componente.js";
import {Buttom} from '../../components/buttons/indexStyled.js'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from '../../service/api.js'

const api = new Api();

export default function SuaInfo(){
    useEffect(()=>{
        console.log('Just one time');
        ListInfoC();
    },[])

    //test zone up
    const [infoc,setInfoC] = useState([]);
    console.log(infoc);
    const ListInfoC = async ()  => {
        let r = await api.infoC();
        console.log(infoc);
        setInfoC(r);
    }

    return(
        <div>
            <ParteCima />
            <Container>
                    <div className='conteudo'>
                            <div class="titulo">
                                <div class="th1"><h1>Suas informações</h1></div>
                                <div class="trilhaM"><label >SUA SACOLA - </label>  <label style={{color : "#00EAFF"}}> SUAS INFORMAÇÕES </label> - <label>PAGAMENTO - </label> <label>  FINALIZAÇÃO</label></div>
                            </div>
                            <div class="auxi">
                                <div class="box1">
                                        {infoc.map(x =>
                                                 <div class="labels">
                                                    <label class="test">Nome: {x.nm_cliente.substring(0,10)}</label>
                                                    <label class="test">Sobrenome:{x.nm_cliente}</label>
                                                    <label class="test" >Email: {x.ds_email}</label>                                        
                                                    <label class="test" for="">Endereço: {x.infoc_tdv_enderecos[0].nm_rua}</label>
                                                    <label class="test" for="">Complemento:{x.infoc_tdv_enderecos[0].ds_complemento}</label>
                                                    <label class="test" for="">Bairro:{x.infoc_tdv_enderecos[0].ds_bairro}</label>
                                                </div>
                                            )}
                                            <div style={{"color":"white" ,"text-decoretion":"none" , 'margin-left':'1em' }}><a href='google.com'> Alterar endereço</a></div>
                                        {infoc.map(x =>
                                                <div class="contato">
                                                    <h2>Telefone</h2>
                                                    <label for="" class="tell">{x.nr_contato/*.substring(0,2)*/}</label>
                                                    <label for="" class="tell">{x.nr_contato/*.substring(2,4)*/} - {x.nr_contato/*.substring(4,)*/}</label>
                                                </div>
                                            )}
                                </div>
                                
                            </div> 
                            <div class="btns">
                                    <Buttom className="teste"><Link to='./suasacola' >Voltar </Link></Buttom>
                                    <Buttom className='teste'><Link to="./pagamento"> Proximo Passo </Link></Buttom>
                            </div>
                        </div>
                </Container>
        </div>
    );

}