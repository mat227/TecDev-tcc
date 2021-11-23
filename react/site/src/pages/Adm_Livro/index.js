import { Container } from "./styled"
import ParteCima from "../../components/Common/parteCimaADM/index";
import Rodape from "../../components/Common/rodape/redape";
import Barralat from "../../components/Common/barra_lateal_perfi"; 
import Api from "../../service/apiAdm";
import { useEffect, useState } from "react";

const api = new Api();


export default function Adm_livro() {
    useEffect(()=>{
        console.log('Just one time');
        listaLivro();
    },[]);
    const [produto, setProduto] = useState([]);
    const [livro, setLivro] = useState('');
    const [descricao, setDescricao] = useState('');
    const [vpara, setVpara] = useState(0);
    const [vde, setVde] = useState(0);
    const [datac, setDatec] =  useState("");
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const [genero, setGenero] = useState('');
    const [disponivel] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [imagem, setImagem] = useState('');
    const [promocao, setPromocao] = useState(0);
    const [brochura, setBrochura] = useState(0);
    const [idalt, setIdalt] = useState(0);
    const [titulo, setTitulo ]= useState("Livro");
        
    const inserirLivro = async () =>{
        if(idalt > 0){
            let r = await api.atualizarLivro(idalt,livro, descricao,vpara,vde,datac,autor,editora,genero,disponivel,qtd,imagem,brochura,promocao);
            if (r.erro) {
                alert(r.erro);
              } else {
                alert('Livro atualizado!!');
                setIdalt(0);
                listaLivro();
                LimpaCampos();
              }
            return r;
        }else{
            let r = await api.cadastrarLivro( livro, descricao,vpara,vde,datac,autor,editora,genero,disponivel,qtd,imagem,brochura,promocao);
            if (r.erro) {
                alert(r.erro);
            } else {
                alert('Livro inserido');
                listaLivro();
            }
            return r;

        }
        
    }

    const listaLivro = async () =>{
        var r =  await api.listaLivroAdm(); 
        console.log(r);
        setProduto(r);
        
    }
    const removelivro =  async (id_l) => {
        console.log(id_l)
        var r = await api.deletaLivro(id_l);
        alert('Livro removido')
        listaLivro();
        return r;
    }
    function LimpaCampos(){
        setLivro('');
        setDescricao('')
        setVpara(0)
        setVde(0)
        setDatec('')
        setAutor('')
        setEditora('')
        setGenero('')
        setQtd(0)
        setImagem('')
        setBrochura(0);
        setPromocao(0);
        setTitulo("livro");

    }
    async function alterar(dados){
        setLivro(dados.nm_livro);
        setDescricao(dados.ds_descricao);
        setVpara(dados.vl_para);
        setVde(dados.vl_de);
        setDatec(dados.dt_lancamento);
        setAutor(dados.ds_autora);
        setEditora(dados.ds_editora);
        setGenero(dados.id_genero);
        setQtd(dados.ds_quantindade);
        setImagem(dados.ds_imagem);
        setBrochura(dados.ds_brocura);
        setPromocao(dados.ds_promocao);
        setIdalt(dados.id_livro);
        console.log(dados.id_livro)
        setTitulo(`alterando o livro ${dados.nm_livro}`);

    }
    
    return (
        <Container>
            <ParteCima />
            <div class="conteudo">
                <div class="box_g">
                    <Barralat />
                    <div class="conteudo_direito">
                        <div class="box">
                            <div class="titulo">
                                <div class="livro_img"><img src="./assets/images/livro.svg" alt='' /></div>
                                <div class="livro">{titulo}</div>
                            </div>
                            <div class="input_g">
                                <div class="agp_input">
                                    <div class="agrp_input1">
                                        <div class="obra">
                                            <div class="n_obra"> Digite o nome da obra </div>
                                            <div class="nome_obra">
                                            <input id="n_obra" name="n_obra" required="required" value={livro} type="text" onChange={e => setLivro(e.target.value) }/>
                                            </div>
                                        </div>
                                        <div class="autor">
                                            <div class="n_autor"> Digite o Autor </div>
                                            <div class="nome_autor">
                                            <input id="n_autor" name="n_autor" required="required" value={autor} type="text" onChange={e => setAutor(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                        <div class="dsc">
                                            <div class="n_dsc">  Digite a Descrição </div>
                                            <div class="nome_dsc">
                                            <input id="n_dsc" name="n_dsc" required="required" value={descricao} type="text" onChange={e => setDescricao(e.target.value) }/>
                                            </div>
                                        </div>
                                
                                        <div class="genero">
                                            <div class="n_genero">  Digite o Gênero </div>
                                            <div class="nome_genero">
                                            <input id="n_genero" name="n_genero" required="required" value={genero}  type="text"  onChange={e => setGenero(e.target.value) } />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="agrp_input2">                                                                        
                                        <div class="edicao">
                                            <div class="n_edicao">  Digite o Ano de Edição</div>
                                            <div class="nome_edicao">
                                            <input id="n_edicao" name="n_edicao" value={datac} required="required" type="date"  onChange={e => setDatec(e.target.value)} />
                                            </div>
                                        </div>                                
                                        <div class="editora">
                                            <div class="n_editora"> Digite a Editora </div>
                                            <div class="nome_editora">
                                            <input id="n_editora" name="n_editora" required="required" value={editora} type="text" onChange={e => setEditora(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                        <div class="sub_titulo">
                                            <div class="n_obra"> Adicionar uma capa </div>
                                                    <div class="nome_obra">
                                                        <input id="n_obra" name="n_obra" placeholder="Informe o link da imagem" value={imagem} required="required" type="text" onChange={e => setImagem(e.target.value) }/>
                                                    </div>
                                        </div> 
                                        <div class="editor">
                                            <div class="n_editora"> Tem brochura </div>
                                            <div class="nome_editora">
                                            <input id="n_editora" name="n_editora" placeholder='1(sim) 0(não)' min='0' max='1' value={brochura} required="required" type="number" onChange={e => setBrochura(e.target.value) }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="agrp_input3">
                                        <div class="promocao2">
                                            <div class="n_promocao">  Está em promoção? </div>
                                            <div class="nome_promocao">
                                            <input id="n_promocao" placeholder="1 para (sim) e 0 (não)" value={promocao} name="n_promocao" required="required" type="number" max='1' min='0' onChange={e => setPromocao(e.target.value) } />
                                            </div>
                                        </div>
                                        <div class="de">
                                            <div class="n_de"> Valor de: </div>
                                            <div class="nome_de">
                                            <input id="n_de" name="n_de" required="required" value={vde} type="number" onChange={e => setVde(e.target.value) }/>
                                            </div>
                                        </div>                                
                                        <div class="para">
                                            <div class="n_para"> Valor para: </div>
                                            <div class="nome_para">
                                            <input id="n_para" name="n_para" required="required" value={vpara} type="number" onChange={e => setVpara(e.target.value) }/>
                                            </div>
                                        </div>                                        
                                        <div className="qtd_disp">
                                             <div class="disponivel">  Quantidade disponivel</div>
                                            <div class="nome_acabamento">
                                            <input id="disponivel" name="qtd_disponivel" value={qtd} required="required" type="number"  onChange={e => setQtd(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div class="sub_titulo2">
                                            <div class="img2"> <img src="./assets/images/adic_livro.svg" alt="" /></div>
                                            <div class="botao2"><button onClick={inserirLivro}>{idalt ===0 ? "Adicinar livro" : "alterar livro"}</button> </div>
                                        </div>
                                </div>
                            </div>  
                            <div className="tabela"> 
                            <table className="table-user">
                                <thead>
                                    <tr>
                                        <th> ID </th>
                                        <th> Obra </th>
                                        <th> Autor </th>
                                        <th> Gênero </th>
                                        <th> Promoção </th>
                                        <th> Valor de </th>
                                        <th> Valor para </th>
                                        <th class="aa"> </th>
                                        <th class="aa"> </th>
                                    </tr>
                                </thead>
                                <tbody  className="tabela" >
                                    {produto.map(x =>
                                        <tr>
                                        <td>{x.id_livro}</td>
                                        <td>{x.nm_livro}</td>
                                        <td>{x.ds_autora}</td>
                                        <td>{x.id_genero}</td>
                                        <td>{x.bt_disponivel}</td>
                                        <td>{x.vl_de}</td>
                                        <td>{x.vl_para}</td>
                                        <td class = "aa">< button onClick={() => alterar(x)}> <img src="./assets/images/editar.svg" alt=''  /></button> </td>
                                        <td class = "aa"> <button onClick={()=> removelivro(x.id_livro)}> <img src="./assets/images/lixo.svg" style={{cursor: "pointer"}} alt=''/> </button> </td>
                                   
                               
                                    </tr>     
                                    )}       
                                </tbody>             
                            </table>
                            </div>     
                        </div>
                    </div>
                </div> 
            </div>
           <Rodape /> 
        </Container>
    )
}

