import { Link } from "react-router-dom";
import { Container } from "./styled"
import ParteCima from "../../components/Common/parteCima/componente";
import Rodape from "../../components/Common/rodape/redape";
import Barralat from "../../components/Common/barra_lateal_perfi"; 
import Api from "../../service/api";
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
    const [data, setDate] =  useState(0);
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const [genero, setGenero] = useState('');
    const [disponivel, setDisponivel] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [imagem, setImagem] = useState('');
    const [promocao, setPromocao] = useState(0);

        
    const inserirLivro = async () =>{
        let r = await api.cadastrarLivro( livro, descricao,vpara,vde,autor,editora,genero,disponivel,qtd,imagem,promocao);
        if (r.erro) {
            alert(r.erro);
          } else {
            alert('Livro inserido');
          }
        
        return;
    }
    const listaLivro = async () =>{
        var r =  await api.listaLivroAdm();
        console.log(r);
        setProduto(r);
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
                                <div class="livro">Livros</div>
                            </div>
                            <div class="sub_titulo">
                                <div class="img"> <img src="./assets/images/image(2).svg" alt='' /></div>
                                <div class="n_obra"> Adicionar uma capa </div>
                                            <div class="nome_obra">
                                            <input id="n_obra" name="n_obra" required="required" type="text" onChange={e => setImagem(e.target.value) }/>
                                            </div>
                            </div>
                            <div class="input_g">
                                <div class="agp_input">
                                    <div class="agrp_input1">
                                        <div class="obra">
                                            <div class="n_obra"> Digite o nome da obra </div>
                                            <div class="nome_obra">
                                            <input id="n_obra" name="n_obra" required="required" type="text" onChange={e => setLivro(e.target.value) }/>
                                            </div>
                                        </div>
                                        <div class="autor">
                                            <div class="n_autor"> Digite o Autor </div>
                                            <div class="nome_autor">
                                            <input id="n_autor" name="n_autor" required="required" type="text" onChange={e => setAutor(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                        <div class="dsc">
                                            <div class="n_dsc">  Digite a Descrição </div>
                                            <div class="nome_dsc">
                                            <input id="n_dsc" name="n_dsc" required="required" type="text" onChange={e => setDescricao(e.target.value) }/>
                                            </div>
                                        </div>
                                
                                        <div class="genero">
                                            <div class="n_genero">  Digite o Gênero </div>
                                            <div class="nome_genero">
                                            <input id="n_genero" name="n_genero" required="required" type="text" onChange={e => setGenero(e.target.value) } />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="agrp_input2">                                                                        
                                        <div class="edicao">
                                            <div class="n_edicao">  Digite o Ano de Edição</div>
                                            <div class="nome_edicao">
                                            <input id="n_edicao" name="n_edicao" required="required" type="Date"  onChange={e => setDate(e)} />
                                            </div>
                                        </div>                                
                                        <div class="editora">
                                            <div class="n_editora"> Digite a Editora </div>
                                            <div class="nome_editora">
                                            <input id="n_editora" name="n_editora" required="required" type="text" onChange={e => setEditora(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                        <div class="valor">
                                            <div class="n_valor"> Digite o Valor </div>
                                            <div class="nome_valor">
                                            <input id="n_valor" name="n_valor" required="required" type="number" onChange={e => setVpara(e.target.value) } />
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="agrp_input3">
                                        <div class="promocao2">
                                            <div class="n_promocao">  Está em promoção? </div>
                                            <div class="nome_promocao">
                                            <input id="n_promocao" name="n_promocao" required="required" type="number" max='1' min='0' onChange={e => setPromocao(e.target.value) } />
                                            </div>
                                        </div>
                                        <div class="de">
                                            <div class="n_de"> Valor de: </div>
                                            <div class="nome_de">
                                            <input id="n_de" name="n_de" required="required" type="number" onChange={e => setVde(e.target.value) }/>
                                            </div>
                                        </div>                                
                                        <div class="para">
                                            <div class="n_para"> Valor para: </div>
                                            <div class="nome_para">
                                            <input id="n_para" name="n_para" required="required" type="number" onChange={e => setVpara(e.target.value) }/>
                                            </div>
                                        </div>                                        
                                        <div className="qtd_disp">
                                             <div class="disponivel">  Quantidade disponivel</div>
                                            <div class="nome_acabamento">
                                            <input id="disponivel" name="qtd_disponivel" required="required" type="number"  onChange={e => setDisponivel(e.target.value) }/>
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div class="sub_titulo2">
                                            <div class="img2"> <img src="./assets/images/adic_livro.svg" alt="" /></div>
                                            <div class="botao2"><button onClick={inserirLivro}> Adicinar livro</button> </div>
                                        </div>
                                </div>
                            </div>        
                            <table class ="table-user">
                                <thead>
                                    <tr>
                                        <th> ID </th>
                                        <th> Obra </th>
                                        <th> Autor </th>
                                        <th> Gênero </th>
                                        <th> Promoção </th>
                                        <th> Valor de </th>
                                        <th> Valor para </th>
                                        <th class="a"> </th>
                                        <th class="a"> </th>
                                    </tr>
                                </thead>
                                <tbody  className="table-corpo">
                                    {produto.map(x =>
                                        <tr >
                                        <td>{x.id_livro}</td>
                                        <td>{x.nm_livro} </td>
                                        <td>{x.ds_autora}</td>
                                        <td>{x.id_genero}</td>
                                        <td>{x.bt_disponivel}</td>
                                        <td>{x.vl_de}</td>
                                        <td>{x.vl_para}</td>
                                        <td class = "aa"> <button> <img src="./assets/images/editar.svg" alt='' /> </button> </td>
                                        <td class = "aa"> <button> <img src="./assets/images/lixo.svg" alt=''/> </button> </td>
                                    </tr>     
                                    )}                               
                                </tbody>             
                            </table>
                        </div>
                    </div>
                </div> 
            </div>
           <Rodape /> 
        </Container>
    )
}

