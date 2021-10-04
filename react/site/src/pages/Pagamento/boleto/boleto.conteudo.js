import ParteCima from "../../../components/Common/parteCima/componente";
import Rodape from "../../../components/Common/rodape/redape";

import { ContainerBoleto } from "./boleto.styled";

export default function Pagamentos() {
    return (
        <ContainerBoleto>
            <ParteCima/>
            <Rodape/>
        </ContainerBoleto>

    );
}