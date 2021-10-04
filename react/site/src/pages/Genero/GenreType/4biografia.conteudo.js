import { ContainerGeneros } from "./type.styled"
import ParteCima from "../../../components/Common/parteCima/componente"
import Rodape from "../../../components/Common/rodape/redape"


export default function GenerosBiografia() { 
    return (        
        <ContainerGeneros>
            <ParteCima />
            <div class="titulo">
            <div class="quadrado" style={{marginRight: 0.5 + "em"}}></div>
                <p>BIOGRAFIA</p>
            <div class="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
        </div>

        <div class="boxes">
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/ANNE.svg" alt="" />
                <div class="infobox">
                    <h3 style={{fontSize: 1 + "em"}}>O DIÁRIO DE ANNE FRANK</h3>
                    <p>Anne Frank</p>
                    <h2>R$ 49,90</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/MICHELLE.svg" alt="" />
                <div class="infobox">
                    <h3>MINHA HISTÓRIA</h3>
                    <p>Michelle Obama</p>
                    <h2>R$ 29,90</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src=" /assets/images/STEVE JOBS.svg" alt=""/>
                <div class="infobox">
                    <h3>STEVE JOBS</h3>
                    <p>Walter Isaacson</p>
                    <h2>R$ 48,29</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/FRIDAsdsa.svg" alt=""/>
                <div class="infobox">
                    <h3 style={{fontSize: 1 + "em"}}>FRIDA - A BIOGRAFIA</h3>
                    <p>Hayden Herrera</p>
                    <h2>R$ 52,90</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/FERNANDA.svg" alt="" />
                <div class="infobox">
                    <h3 style={{fontSize: 0.9 + "em"}}>PRÓLOGO, ATO, EPÍLOGO: MEMÓRIAS</h3>
                    <p>Fernanda Montenegro</p>
                    <h2>R$ 28,87</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/FREDDIE.svg" alt="" />
                <div class="infobox">
                    <h3 style={{fontSize: 1 + "em"}}>O MENINO QUE VIROU CHUVA</h3>
                    <p>Yuri de Francco e Renato Moriconi</p>
                    <h2>R$ 40,48</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/NELSON.svg" alt="" />
                <div class="infobox" style={{lineHeight: 2.4 + "em"}}>
                    <h3 style={{fontSize: 1 + "em"}}>LONG WALK TO FREEDOM</h3>
                    <p>Nelson Mandela</p>
                    <h2>R$ 95,18</h2>
                </div>
                </a>
            </div>
            <div class="box">
                <a href="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/STEPHEN.svg" alt="" />
                <div class="infobox" style={{lineHeight: 2.4 + "em"}}>
                    <h3 style={{fontSize: 0.9 + "em", lineHeight: 1.2 + "em"}}>STEPHEN HAWKING: A BIOGRAPHY (GREENWOOD BIOGRAPHIES)</h3>
                    <p>Kristine m. Larsen</p>
                    <h2>R$ 388,51</h2>
                </div>
                </a>
            </div>
        </div>
            <Rodape />
        </ContainerGeneros>
    )
};