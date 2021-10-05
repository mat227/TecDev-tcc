import styled  from "styled-components";

const Container = styled.div`
            height: 43em;
            background-color: #125476;
            background-image: url('./assets/imagens/fundo.svg');
            background-repeat: no-repeat;
            
        *{
            box-sizing: border-box;
            margin: 0;
            
        }
        .conteudo{
            background-color:  rgba(18, 23, 43, 0.5);
            border-radius: 2em;
            padding: 1.5em;
            margin:2em;
            
        }
        .titulo{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5em;
            margin-top : 1em;
        }
        .th1{
            color: white;
        }
        .trilhaM{
            color: white;
            font-size: 0.7em;
        }
        .container-cont{
            display: flex;
            flex-direction: row;
            //margin: 1em;
            
        }
        .tabela{
            width: 75vw;
            
        }
        .cupom{
              width: 25vw;
              text-align: center;
            
        }
        .inputC{
            margin-top: 20em;
        }
        .input input{
            height: 2em;
            width: 15em;
            border-radius: 0.5em;
            background: #7CC3DF;
            border: none;
            margin-right: 8em;
        
        }
        .bimg{
            width: 1.5em;
            height: 1.5em;
            margin: 1em;
            border-radius: 50vh;
            background: turquoise;
            border: none;
        }
        .brem{
            width: 2.2em;
            height: 2em;
            border-radius: 50vh;
            background: white;
            border: none;
            
        }
        .inputC{
            color: white;
            
        }
        
        .quadc{
            margin-bottom: 3em;
        }
        .btns{
                margin-top: 1em;
                display: flex;
                flex-direction: row;
        }
        .btnss{
            border: #1FB5CD;
            background: #1FB5CD;
            padding: 0.5em;
            color: white;
            border-radius: 0.3em;
            width: 5vw;
            margin-right: 1em;
        }
        .th2{
            color: white;
            text-align: center;
            margin-bottom: 1em;
            width: 15vw;
        }
        .th2 h2{
            font-size: 2em;
            border-bottom:1px solid white ;
        }
        .quadb{
            display: flex;
            flex-direction: column;
            margin-top: 9em;
        }
        .btnf{
            border: #1FB5CD;
            background: #1FB5CD;
            padding: 0.5em;
            color: white;
            width: 15vw;
            text-align: center; 
            margin-top: 1em;     
            border-radius: 0.3em;
        }
        table{
            width: 60vw;
            border-collapse: collapse;
            border-spacing: 2em;
            justify-content: center;
            color: white;
        
        }
        thead{
            border-bottom:  2px solid white;
        
            color: white;
            margin: 1em;
        
        }
        tbody{
            border-top:  1px solid white;
            border-right: 1px solid white;
        }
        td{
           height: 1em;
           text-align: center;
        }

`

export {Container}