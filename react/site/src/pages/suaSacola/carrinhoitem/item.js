import { useState } from 'react';
import { Container, RemoverIcon } from './styled'
import Contador from "../Ct/contador";






export default function Carrinholivro(props) {
  const [livro, setlivro] = useState(props.info);

  


  function alterarQtd(qtd) {
    setlivro({...livro, qtd });

    props.onUpdate(livro.id, qtd)
  }

  

  function remover() {
    props.onRemove(livro.id);
  }



  return (
    <Container>
         <table>
                <thead>
                  <tr>
                    <th className="2">Produto</th>
                    <th className="3">Preço</th>
                    <th className="4">Quantidade</th>
                    <th className="5">Total</th>
                    <th className="espaco"> </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                      <td>
                        <img src="" alt="" />{" "}
                        <label>
                          <img
                            src={livro.ds_imagen}
                            alt=""
                            style={{ height: "100px", width: "100" }}
                          />
                        </label>
                      </td>
                      <td>
                        <label>R$ {livro.vl_para},00</label>
                      </td>
                      <td>
                      <Contador onChange={alterarQtd} value={livro.qtd} />

                      </td>
                      <td>
                        <label>R$ {livro.qtd*livro.vl_para},00</label>
                      </td>
                      <td>
                        <label><div className="remover"> <RemoverIcon onClick={remover} /> </div></label>
                      </td>
                    </tr>
                </tbody>
              </table>
     
    </Container>
  )
}