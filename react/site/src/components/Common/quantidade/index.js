import {useState } from "react";
import Container from "./styled";



export default function Qtd(){
    const [ qtd, setQtd ] = useState(0);
    

    function somar() {
        if (qtd >= 10)
          return;
        setQtd(qtd+1)
      }

      function subtrair() {
        if (qtd === 1) 
          return;
        setQtd(qtd-1)
      }

      

    return(
        <Container>
            <div className="subtrair"  onClick={ subtrair }> - </div>
            <div className="qtd">  {qtd} </div>
            <div className="somar" onClick={ somar }> + </div>
        </Container>
    )

}