import styled  from "styled-components";

const Container = styled.div`
            * {
                box-sizing: border-box;
            }
            
            body {
                margin: 0em;
            }
        display: flex;
        flex-direction: row;
        background-color: #135578;
        background-image: url('./assets/imagens/fundo.svg');
        padding: 2em;
        .faixaUm{
            background-color: #183C53;
            border-radius: 0.5em;
            text-align: center;
            padding: 0em 0em 5em 0;
            margin: 1em;
        }
        .colunas{
            color: white;
            margin: 1.5em;
        }
        .especial{
            background-color: #298EEB;
            padding: 0.5em;
            margin: 5em 0 0   0 !important; 
            width: 15vw;
        }
        //faixa 2
            .faixaDois{
                display: flex;
                flex-direction: column;
                background-color: #183C53;//#298EEB;
                margin: 1em;
                padding: 2em 1em 1em 1em;
                border-radius: 1em;
            
            }
            .aux{
                background-color: #183C53;  
                margin: 1em;
                border-radius: 0.5em;
            }
            .aux2{
                background-color:  #12172B;
                border-radius: 2em;
                padding: 1em;
            }
            .titulo{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                margin-left: 10em;
            }
            .contato{
                display: flex;
                flex-direction: row;
                align-items: center;
                color: white;
                margin-left: 1.2em;
            }
            .labels{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                
                
            }
            .test{
                color: white;
                align-items: center;
                border-bottom: 1px solid white;
                width: 25vw;
                padding: 1.3em;
                height: 1em;
                margin: 1em;
            }
            .btn{
                text-align: center;
            }
            .btnE button{
                border: none;
                color: white;
                background: none;
            }
            .btnE :hover{
                border: 1px solid white ;
            }
            .titulo{
                color: white;
            }
            .btninfo button{
                border: none;
                color: white;
                background: none;
            }
            .btninfo :hover{
                border: 1px solid white ;
            }
            .tell{
                margin-left: 1em ;
                background-color: #227591;
                height: 1.5em;
                border-radius: 0.3em;
                padding: 0.2em;
                color: black;
            }
 `
export {Container}