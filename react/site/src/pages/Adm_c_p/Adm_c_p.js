import { ContainerAdmcp } from "./adm_c_p.styled"
import Cabecalho  from "../../components/Common/cabecalhoperfil/nav";
import Rodape from "../../components/Common/rodape/redape";
import Barralat from "../../components/Common/barra_lateal_perfi";
import { Buttom } from "../../components/buttons/indexStyled";
import Api from "../../service/apiAdm";
import { useEffect, useState } from "react";
const api = new Api();

export default function Adm_c_p() {
    const [cupom, setCupom] = useState([]);
    const [nome, setNome] = useState('');
    const [datac, setDatac] = useState('');
    const [regra, setRegra] = useState('');
    const [porce , setPorce] = useState('');


    useEffect( () =>{
        listaCupom();
        console.log("Just one time")
    }, []);

    const adicionarCupom = async () => {
        var r = await api.addCupom(nome,datac,porce,regra);
        if(r.erro){
            alert(r.erro)
            return;
        }else{
            alert("cupom adicionado");
            return r.data;
        }
    }
    const listaCupom =  async () =>{
        var data = await api.listaCupom();
        setCupom(data);   
    }
    return (
        <ContainerAdmcp>
            <Cabecalho/>
            <div className="conteudo">
                    <div className="box_g">
                        <Barralat/>
                        <div className="conteudo_direito">
                            <div className="box">
                                <div className="titulo">
                                        <div className="cupons_img">
                                            <img src="./assets/images/promocao.svg" alt=""/>
                                        </div>
                                    <div className="cupons"> Cupons </div>
                                </div>
                            <div className='aux'>
                                <div className="input_g">
                                    <div className="agp_input">
                                        <div className="agrp_input1">
                                            <div className="cupom">
                                                <div className="n_cupom"> Digite o nome do Cupom</div>
                                                <div className="nome_cupom">
                                                <input id="n_cupom" name="n_cupom" required="required" value={nome} type="text" onChange={e => setNome(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="duracao">
                                                <div className="n_duracao"> Digite a Duração </div>
                                                <div className="nome_duracao">
                                                <input id="n_duracao" name="n_duracao" value={datac} required="required" type="date" onChange={e => setDatac(e.target.value)}  />
                                                </div>
                                            </div>
                                        
                                            <div className="porcentagem">
                                                <div className="n_porcentagem">  Digite a Porcentagem </div>
                                                <div className="nome_porcentagem">
                                                <input id="n_porcentagem" name="n_porcentagem" required="required" value={porce} type="number" onChange={e => setPorce(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="agrp_input2">

                                            <div className="regras">
                                                <div className="n_regras">  Digite as Regras </div>
                                                <div className="nome_regras">
                                                <input id="n_regras" name="n_regras" required="required" value={regra} type="text" onChange={e => setRegra(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="agrp_3">
                                            <div className="adc_c">
                                                <div className="adicionar_cupom"><Buttom onClick={adicionarCupom}> Adicionar </Buttom> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                                <div className='tabelaCupom'>
                                        <table>
                                            <thead>
                                                <th>Nome</th>
                                                <th>porcetagem</th>
                                                <th>Regra</th>
                                                <th>data</th>
                                            </thead>
                                              
                                                {cupom.map(x => 
                                                    
                                                    <tbody>     
                                                            <td>{x.ds_nome}</td>
                                                            <td>{x.vl_porcentagem}</td>
                                                            <td title={x.ds_regra}>{x.ds_regra.substring(0,10)}</td>
                                                            <td>{x.dt_duracao.substring(0,10)}</td>
                                                     
                                                    </tbody> 
                                                    )}
                                                                                                   
                                        </table>
                                    </div>  
                                    </div>                    
                            </div>
                        </div>
                    </div>
             </div>
            <Rodape/>
         </ContainerAdmcp>
    )
}       