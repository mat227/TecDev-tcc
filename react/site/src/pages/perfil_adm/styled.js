import styled  from "styled-components";

const Container = styled.div`
     background-color: #1e4f63;
     background-image: url("../Perfil_ADM/assets/images/fundo.svg");
     height: 100%;
    * {
            box-sizing: border-box;
            margin: 0em;
        }

        .box_g {
                display: flex;
                flex-direction: row;
                color: white;
                padding-top: 10px;
                padding-left: 20px;
                
            }

            .conteudo_esquerdo {
                background-color: #183c53;
                width: 10em;
                height: 30em;

                border-radius: 10px;
                margin:1em ;
            }

            .informacao {
                font-family: 'Baloo Thambi 2';

                display: flex;
                flex-direction: column;
                
            }

            .botao_e button {
                color: #fff;
                background: #226dae;
                font-family: 'Baloo Thambi 2';
                font-size: 16px;
                
                border: none;
                align-items: center;
                cursor: pointer;
            
                padding: .5em;
                margin-top: 1em;
                margin-left: 0em;
                width: 10em;
            }

            .botao1 button {
                background-color: #183c53;
                font-family: 'Baloo Thambi 2';
                color: #fff;
                font-size: 16px;

                border: none;
                align-items: center;
                cursor: pointer;

                margin-top: 5em;
                padding-bottom: 2em;
                
                margin-left: 0em;
                width: 10em;
            }

            .botao2 button {
                background-color: #183c53;
                font-family: 'Baloo Thambi 2';
                color: #fff;
                font-size: 16px;

                border: none;
                align-items: center;
                cursor: pointer;

                margin-top: 2em;
                padding-bottom: 2em;
                
                margin-left: 0em;
                width: 10em;
            }

            .botao3 button {
                background-color: #183c53;
                font-family: 'Baloo Thambi 2';
                color: #fff;
                font-size: 16px;

                border: none;
                align-items: center;
                cursor: pointer;

                margin-top: 1em;
                padding-bottom: 2em;
                
                margin-left: 0em;
                width: 10em;
            }


            .conteudo_direito {
                background-color: #183c53;
                width: 65em;
                height: 30em;
                margin-left: 1.5em;
                border-radius: 10px;
                margin:1em ;
            }

            .box {
                display: flex;
                flex-direction: column;

                margin-left: 1em;
                margin-top: 1em;
                width: 63em;
                height: 28em;

                background-color: #21659f;

                border-radius: 10px;
            }

            .titulo {
                display: flex;
                flex-direction: row;

                margin-top: 2em;
                margin-left: 1em;
            }

            .perfil_img img {
                width: 1.5em;
                height: 1.5em;
                margin-left: 2em;
            }

            .perfil {
                font-family: 'Baloo Thambi 2';
                font-size: 20px;
                margin-left: 1em;
            }

            .ed_info {
                font-family: 'Baloo Thambi 2';
                font-size: 16px;
                margin-left: 40em; 
            }
            .contato{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        color: white;
                    }
                    .tell{

                        margin-left: 1em ;
                        background-color: #183c53;
                        border-radius: 0.3em;
                        padding: 0.2em;
                        color: white;
                    }





                    .redes {
                        display: flex;
                        flex-direction: row;

                        margin-top: 2em;
                        background-color: #12172b;

                        width: 79em;
                        height: 4.5em;
                    }

                    .logo {
                    display: flex;
                    flex-direction: column;

                    margin-left: 2em;
                    margin-top: 1em;
                    }

                    .img_logo img {
                    width: 6em;
                    
                    }

                    .input_g {
                        display: flex;
                        flex-direction: column;
                        font-family: 'Baloo Thambi 2';
                        font-size: 12px;
                    }

                    .agrp_input1, .agrp_input2, .agrp_input3, .agrp_input4, .agrp_input5 {
                        display: flex;
                        flex-direction: row;

                        margin-top: 1em;
                        margin-left: 6em;
                    }


                    .n_nome_ad, .n_sobrenome, .n_email, .n_senha, .n_endereco, .n_complemento, .n_bairro, .n_telefone {
                        font-size: 18px; 
                    }

                    .nome_nome_ad, .nome_sobrenome, .nome_email, .nome_senha, .nome_endereco, .nome_complemento, .nome_bairro, .nome_telefone {
                        margin-right: 15em;
                        font-size: 12px;
                    }

                    .nome_nome_ad input, .nome_sobrenome input, .nome_email input, .nome_senha input, .nome_endereco input, .nome_complemento input, .nome_bairro input, .nome_telefone input {
                        border-top: 1px solid transparent;
                        border-left: 1px solid transparent;
                        border-right: 1px solid transparent;
                        border-bottom: 1px solid;
                        outline: none;
                        background-color:#21659f ;
                    
                        width: 19em;
                        height: 1em;
                            
                    }
                                        



`

export {Container}