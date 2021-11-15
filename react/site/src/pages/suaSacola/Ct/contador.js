import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: white;
  font-family: "Rowdies";

  & > * {
    margin: 0.1em;
    background-color: #f5f5f5;
    padding: 0.3em 0.6em;
    user-select: none;
  }

  .mais,
  .menos {
    display: flex;
    width: 1.5em;
    height: 1.5em;
    justify-content: center;
    align-items: center;
    border-radius: 50vh;
    background: turquoise;
    border: none;
  }
  .quantidade {
    display: flex;
    width: 2em;
    height: 1.8em;
    justify-content: center;
    align-items: center;
    border-radius: 0.5vh;
    background: turquoise;
    border: none;
  }
`;

export default function Contador(props) {
  const [qtd, setQtd] = useState(props.value);

  function incrementar() {
    if (qtd >= 10) return;
    setQtd(qtd + 1);
  }

  function decrementar() {
    if (qtd === 0) return;
    setQtd(qtd - 1);
  }

  useEffect(() => {
    props.onChange(qtd);
  }, [qtd]);

  return (
    <Container>
      <div className="menos" onClick={decrementar}>
        -
      </div>

      <div className="quantidade">{qtd}</div>

      <div className="mais" onClick={incrementar}>
        +
      </div>
    </Container>
  );
}
