import styled  from "styled-components";

const Container = styled.div`   
        background-color: #135578;
        background-image: url('./assets/imagens/fundo.svg');
        padding: 6.4em 2em 3em 2em;
        //height: 100%;
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        .boxMud{
            display: flex;
            flex-direction: column;
            padding: 2em;
            background-color: #102A45;
            border-radius: 2em;
        }
        .titulo{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5em;
        }
        .th1{
            color: white;
        }
        .trilhaM{
            color: white;
            font-size: 0.7em;
        }
        .labels{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 70vw;
             
        }
        .test{
            color: white;
            align-items: center;
            border-bottom: 1px solid white;
            width: 25vw;
            padding: 1.3em;
            height: 1em;
            margin: 1em 0em 0.6em 1em;
        }
        .contato{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: white;
            margin: 0.8em 0em 0.5em 1em;
        }
        .tell{

            margin-left: 1em ;
            background-color: #227591;
            border-radius: 0.3em;
            padding: 0.2em;
            color: white;
        }
        .auxi{
            display: flex;
            flex-direction: row;
        }
        .box2{
            color: white ;
            margin-top: 1.5em;
        }
        .lbl{
            margin: 0.8em 0em 1em 0em;
            width: 20vw;
        }
        .btns{
            display: flex;
            align-items: center;
            justify-content: end;
            
        }
       
`

export {Container}