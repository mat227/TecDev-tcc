import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infoa_dtn_tb_avaliacao from  "./infoa_dtn_tb_avaliacao.js";
import _infoa_dtn_tb_cliente from  "./infoa_dtn_tb_cliente.js";
import _infoa_dtn_tb_endereco from  "./infoa_dtn_tb_endereco.js";
import _infoa_dtn_tb_favoritos from  "./infoa_dtn_tb_favoritos.js";
import _infoa_dtn_tb_produto from  "./infoa_dtn_tb_produto.js";
import _infoa_dtn_tb_tamanhos from  "./infoa_dtn_tb_tamanhos.js";
import _infoa_enl_cartao_credito from  "./infoa_enl_cartao_credito.js";
import _infoa_enl_categoria from  "./infoa_enl_categoria.js";
import _infoa_enl_chat from  "./infoa_enl_chat.js";
import _infoa_enl_chat_usuario from  "./infoa_enl_chat_usuario.js";
import _infoa_enl_login from  "./infoa_enl_login.js";
import _infoa_enl_pedido from  "./infoa_enl_pedido.js";
import _infoa_enl_pedido_compra_e_venda from  "./infoa_enl_pedido_compra_e_venda.js";
import _infoa_enl_plano from  "./infoa_enl_plano.js";
import _infoa_enl_produto from  "./infoa_enl_produto.js";
import _infoa_enl_rank from  "./infoa_enl_rank.js";
import _infoa_enl_reg_plano from  "./infoa_enl_reg_plano.js";
import _infoa_enl_usuario from  "./infoa_enl_usuario.js";
import _infoa_gab_cartao from  "./infoa_gab_cartao.js";
import _infoa_gab_empresa from  "./infoa_gab_empresa.js";
import _infoa_gab_endereco from  "./infoa_gab_endereco.js";
import _infoa_gab_entrega from  "./infoa_gab_entrega.js";
import _infoa_gab_produto from  "./infoa_gab_produto.js";
import _infoa_gab_usuario from  "./infoa_gab_usuario.js";
import _infoa_gab_venda from  "./infoa_gab_venda.js";
import _infoa_gab_venda_item from  "./infoa_gab_venda_item.js";
import _infoa_sti_categoria from  "./infoa_sti_categoria.js";
import _infoa_sti_cliente from  "./infoa_sti_cliente.js";
import _infoa_sti_endereco from  "./infoa_sti_endereco.js";
import _infoa_sti_produto from  "./infoa_sti_produto.js";
import _infoa_sti_venda_produto from  "./infoa_sti_venda_produto.js";
import _infoa_sti_vendas from  "./infoa_sti_vendas.js";
import _infob_amz_tbdenuncia from  "./infob_amz_tbdenuncia.js";
import _infob_amz_tbreporte_denuncia from  "./infob_amz_tbreporte_denuncia.js";
import _infob_amz_tbusuario from  "./infob_amz_tbusuario.js";
import _infob_apn_tb_adm from  "./infob_apn_tb_adm.js";
import _infob_apn_tb_adocao from  "./infob_apn_tb_adocao.js";
import _infob_apn_tb_pet from  "./infob_apn_tb_pet.js";
import _infob_apn_tb_user from  "./infob_apn_tb_user.js";
import _infob_mw_ator from  "./infob_mw_ator.js";
import _infob_mw_comentario from  "./infob_mw_comentario.js";
import _infob_mw_filme from  "./infob_mw_filme.js";
import _infob_mw_filme_usuario from  "./infob_mw_filme_usuario.js";
import _infob_mw_lista from  "./infob_mw_lista.js";
import _infob_mw_lista_item from  "./infob_mw_lista_item.js";
import _infob_mw_usuario from  "./infob_mw_usuario.js";
import _infoc_ntc_administrador from  "./infoc_ntc_administrador.js";
import _infoc_ntc_apoio_frase from  "./infoc_ntc_apoio_frase.js";
import _infoc_ntc_caracteristica_fisica from  "./infoc_ntc_caracteristica_fisica.js";
import _infoc_ntc_denuncia from  "./infoc_ntc_denuncia.js";
import _infoc_ntc_local from  "./infoc_ntc_local.js";
import _infoc_ntc_usuario from  "./infoc_ntc_usuario.js";
import _infoc_ntc_vestimento from  "./infoc_ntc_vestimento.js";
import _infoc_tdv_adm from  "./infoc_tdv_adm.js";
import _infoc_tdv_cliente from  "./infoc_tdv_cliente.js";
import _infoc_tdv_cupom from  "./infoc_tdv_cupom.js";
import _infoc_tdv_endereco from  "./infoc_tdv_endereco.js";
import _infoc_tdv_favorito from  "./infoc_tdv_favorito.js";
import _infoc_tdv_forma_pagamento from  "./infoc_tdv_forma_pagamento.js";
import _infoc_tdv_genero from  "./infoc_tdv_genero.js";
import _infoc_tdv_livro from  "./infoc_tdv_livro.js";
import _infoc_tdv_pedido from  "./infoc_tdv_pedido.js";
import _infoc_tdv_pedido_item from  "./infoc_tdv_pedido_item.js";
import _infoc_tht_cartao from  "./infoc_tht_cartao.js";
import _infoc_tht_chat from  "./infoc_tht_chat.js";
import _infoc_tht_compra from  "./infoc_tht_compra.js";
import _infoc_tht_lugar from  "./infoc_tht_lugar.js";
import _infoc_tht_pacote from  "./infoc_tht_pacote.js";
import _infoc_tht_usuario from  "./infoc_tht_usuario.js";
import _infod_leo_agendamento from  "./infod_leo_agendamento.js";
import _infod_leo_cliente from  "./infod_leo_cliente.js";
import _infod_leo_funcionario from  "./infod_leo_funcionario.js";
import _infod_leo_servico from  "./infod_leo_servico.js";
import _infod_leo_servico_imagem from  "./infod_leo_servico_imagem.js";
import _infod_ssc_cliente from  "./infod_ssc_cliente.js";
import _infod_ssc_endereco from  "./infod_ssc_endereco.js";
import _infod_ssc_estoque from  "./infod_ssc_estoque.js";
import _infod_ssc_item_venda from  "./infod_ssc_item_venda.js";
import _infod_ssc_produto from  "./infod_ssc_produto.js";
import _infod_ssc_venda from  "./infod_ssc_venda.js";
import _infod_tif_acessos from  "./infod_tif_acessos.js";
import _infod_tif_amigos from  "./infod_tif_amigos.js";
import _infod_tif_animes from  "./infod_tif_animes.js";
import _infod_tif_autorizados from  "./infod_tif_autorizados.js";
import _infod_tif_chat from  "./infod_tif_chat.js";
import _infod_tif_chat_mensagem from  "./infod_tif_chat_mensagem.js";
import _infod_tif_chat_usuario from  "./infod_tif_chat_usuario.js";
import _infod_tif_comentario from  "./infod_tif_comentario.js";
import _infod_tif_comentario_post from  "./infod_tif_comentario_post.js";
import _infod_tif_comunidade from  "./infod_tif_comunidade.js";
import _infod_tif_like from  "./infod_tif_like.js";
import _infod_tif_post from  "./infod_tif_post.js";
import _infod_tif_usuario from  "./infod_tif_usuario.js";

export default function initModels(sequelize) {
  var infoa_dtn_tb_avaliacao = _infoa_dtn_tb_avaliacao.init(sequelize, DataTypes);
  var infoa_dtn_tb_cliente = _infoa_dtn_tb_cliente.init(sequelize, DataTypes);
  var infoa_dtn_tb_endereco = _infoa_dtn_tb_endereco.init(sequelize, DataTypes);
  var infoa_dtn_tb_favoritos = _infoa_dtn_tb_favoritos.init(sequelize, DataTypes);
  var infoa_dtn_tb_produto = _infoa_dtn_tb_produto.init(sequelize, DataTypes);
  var infoa_dtn_tb_tamanhos = _infoa_dtn_tb_tamanhos.init(sequelize, DataTypes);
  var infoa_enl_cartao_credito = _infoa_enl_cartao_credito.init(sequelize, DataTypes);
  var infoa_enl_categoria = _infoa_enl_categoria.init(sequelize, DataTypes);
  var infoa_enl_chat = _infoa_enl_chat.init(sequelize, DataTypes);
  var infoa_enl_chat_usuario = _infoa_enl_chat_usuario.init(sequelize, DataTypes);
  var infoa_enl_login = _infoa_enl_login.init(sequelize, DataTypes);
  var infoa_enl_pedido = _infoa_enl_pedido.init(sequelize, DataTypes);
  var infoa_enl_pedido_compra_e_venda = _infoa_enl_pedido_compra_e_venda.init(sequelize, DataTypes);
  var infoa_enl_plano = _infoa_enl_plano.init(sequelize, DataTypes);
  var infoa_enl_produto = _infoa_enl_produto.init(sequelize, DataTypes);
  var infoa_enl_rank = _infoa_enl_rank.init(sequelize, DataTypes);
  var infoa_enl_reg_plano = _infoa_enl_reg_plano.init(sequelize, DataTypes);
  var infoa_enl_usuario = _infoa_enl_usuario.init(sequelize, DataTypes);
  var infoa_gab_cartao = _infoa_gab_cartao.init(sequelize, DataTypes);
  var infoa_gab_empresa = _infoa_gab_empresa.init(sequelize, DataTypes);
  var infoa_gab_endereco = _infoa_gab_endereco.init(sequelize, DataTypes);
  var infoa_gab_entrega = _infoa_gab_entrega.init(sequelize, DataTypes);
  var infoa_gab_produto = _infoa_gab_produto.init(sequelize, DataTypes);
  var infoa_gab_usuario = _infoa_gab_usuario.init(sequelize, DataTypes);
  var infoa_gab_venda = _infoa_gab_venda.init(sequelize, DataTypes);
  var infoa_gab_venda_item = _infoa_gab_venda_item.init(sequelize, DataTypes);
  var infoa_sti_categoria = _infoa_sti_categoria.init(sequelize, DataTypes);
  var infoa_sti_cliente = _infoa_sti_cliente.init(sequelize, DataTypes);
  var infoa_sti_endereco = _infoa_sti_endereco.init(sequelize, DataTypes);
  var infoa_sti_produto = _infoa_sti_produto.init(sequelize, DataTypes);
  var infoa_sti_venda_produto = _infoa_sti_venda_produto.init(sequelize, DataTypes);
  var infoa_sti_vendas = _infoa_sti_vendas.init(sequelize, DataTypes);
  var infob_amz_tbdenuncia = _infob_amz_tbdenuncia.init(sequelize, DataTypes);
  var infob_amz_tbreporte_denuncia = _infob_amz_tbreporte_denuncia.init(sequelize, DataTypes);
  var infob_amz_tbusuario = _infob_amz_tbusuario.init(sequelize, DataTypes);
  var infob_apn_tb_adm = _infob_apn_tb_adm.init(sequelize, DataTypes);
  var infob_apn_tb_adocao = _infob_apn_tb_adocao.init(sequelize, DataTypes);
  var infob_apn_tb_pet = _infob_apn_tb_pet.init(sequelize, DataTypes);
  var infob_apn_tb_user = _infob_apn_tb_user.init(sequelize, DataTypes);
  var infob_mw_ator = _infob_mw_ator.init(sequelize, DataTypes);
  var infob_mw_comentario = _infob_mw_comentario.init(sequelize, DataTypes);
  var infob_mw_filme = _infob_mw_filme.init(sequelize, DataTypes);
  var infob_mw_filme_usuario = _infob_mw_filme_usuario.init(sequelize, DataTypes);
  var infob_mw_lista = _infob_mw_lista.init(sequelize, DataTypes);
  var infob_mw_lista_item = _infob_mw_lista_item.init(sequelize, DataTypes);
  var infob_mw_usuario = _infob_mw_usuario.init(sequelize, DataTypes);
  var infoc_ntc_administrador = _infoc_ntc_administrador.init(sequelize, DataTypes);
  var infoc_ntc_apoio_frase = _infoc_ntc_apoio_frase.init(sequelize, DataTypes);
  var infoc_ntc_caracteristica_fisica = _infoc_ntc_caracteristica_fisica.init(sequelize, DataTypes);
  var infoc_ntc_denuncia = _infoc_ntc_denuncia.init(sequelize, DataTypes);
  var infoc_ntc_local = _infoc_ntc_local.init(sequelize, DataTypes);
  var infoc_ntc_usuario = _infoc_ntc_usuario.init(sequelize, DataTypes);
  var infoc_ntc_vestimento = _infoc_ntc_vestimento.init(sequelize, DataTypes);
  var infoc_tdv_adm = _infoc_tdv_adm.init(sequelize, DataTypes);
  var infoc_tdv_cliente = _infoc_tdv_cliente.init(sequelize, DataTypes);
  var infoc_tdv_cupom = _infoc_tdv_cupom.init(sequelize, DataTypes);
  var infoc_tdv_endereco = _infoc_tdv_endereco.init(sequelize, DataTypes);
  var infoc_tdv_favorito = _infoc_tdv_favorito.init(sequelize, DataTypes);
  var infoc_tdv_forma_pagamento = _infoc_tdv_forma_pagamento.init(sequelize, DataTypes);
  var infoc_tdv_genero = _infoc_tdv_genero.init(sequelize, DataTypes);
  var infoc_tdv_livro = _infoc_tdv_livro.init(sequelize, DataTypes);
  var infoc_tdv_pedido = _infoc_tdv_pedido.init(sequelize, DataTypes);
  var infoc_tdv_pedido_item = _infoc_tdv_pedido_item.init(sequelize, DataTypes);
  var infoc_tht_cartao = _infoc_tht_cartao.init(sequelize, DataTypes);
  var infoc_tht_chat = _infoc_tht_chat.init(sequelize, DataTypes);
  var infoc_tht_compra = _infoc_tht_compra.init(sequelize, DataTypes);
  var infoc_tht_lugar = _infoc_tht_lugar.init(sequelize, DataTypes);
  var infoc_tht_pacote = _infoc_tht_pacote.init(sequelize, DataTypes);
  var infoc_tht_usuario = _infoc_tht_usuario.init(sequelize, DataTypes);
  var infod_leo_agendamento = _infod_leo_agendamento.init(sequelize, DataTypes);
  var infod_leo_cliente = _infod_leo_cliente.init(sequelize, DataTypes);
  var infod_leo_funcionario = _infod_leo_funcionario.init(sequelize, DataTypes);
  var infod_leo_servico = _infod_leo_servico.init(sequelize, DataTypes);
  var infod_leo_servico_imagem = _infod_leo_servico_imagem.init(sequelize, DataTypes);
  var infod_ssc_cliente = _infod_ssc_cliente.init(sequelize, DataTypes);
  var infod_ssc_endereco = _infod_ssc_endereco.init(sequelize, DataTypes);
  var infod_ssc_estoque = _infod_ssc_estoque.init(sequelize, DataTypes);
  var infod_ssc_item_venda = _infod_ssc_item_venda.init(sequelize, DataTypes);
  var infod_ssc_produto = _infod_ssc_produto.init(sequelize, DataTypes);
  var infod_ssc_venda = _infod_ssc_venda.init(sequelize, DataTypes);
  var infod_tif_acessos = _infod_tif_acessos.init(sequelize, DataTypes);
  var infod_tif_amigos = _infod_tif_amigos.init(sequelize, DataTypes);
  var infod_tif_animes = _infod_tif_animes.init(sequelize, DataTypes);
  var infod_tif_autorizados = _infod_tif_autorizados.init(sequelize, DataTypes);
  var infod_tif_chat = _infod_tif_chat.init(sequelize, DataTypes);
  var infod_tif_chat_mensagem = _infod_tif_chat_mensagem.init(sequelize, DataTypes);
  var infod_tif_chat_usuario = _infod_tif_chat_usuario.init(sequelize, DataTypes);
  var infod_tif_comentario = _infod_tif_comentario.init(sequelize, DataTypes);
  var infod_tif_comentario_post = _infod_tif_comentario_post.init(sequelize, DataTypes);
  var infod_tif_comunidade = _infod_tif_comunidade.init(sequelize, DataTypes);
  var infod_tif_like = _infod_tif_like.init(sequelize, DataTypes);
  var infod_tif_post = _infod_tif_post.init(sequelize, DataTypes);
  var infod_tif_usuario = _infod_tif_usuario.init(sequelize, DataTypes);


  return {
    infoa_dtn_tb_avaliacao,
    infoa_dtn_tb_cliente,
    infoa_dtn_tb_endereco,
    infoa_dtn_tb_favoritos,
    infoa_dtn_tb_produto,
    infoa_dtn_tb_tamanhos,
    infoa_enl_cartao_credito,
    infoa_enl_categoria,
    infoa_enl_chat,
    infoa_enl_chat_usuario,
    infoa_enl_login,
    infoa_enl_pedido,
    infoa_enl_pedido_compra_e_venda,
    infoa_enl_plano,
    infoa_enl_produto,
    infoa_enl_rank,
    infoa_enl_reg_plano,
    infoa_enl_usuario,
    infoa_gab_cartao,
    infoa_gab_empresa,
    infoa_gab_endereco,
    infoa_gab_entrega,
    infoa_gab_produto,
    infoa_gab_usuario,
    infoa_gab_venda,
    infoa_gab_venda_item,
    infoa_sti_categoria,
    infoa_sti_cliente,
    infoa_sti_endereco,
    infoa_sti_produto,
    infoa_sti_venda_produto,
    infoa_sti_vendas,
    infob_amz_tbdenuncia,
    infob_amz_tbreporte_denuncia,
    infob_amz_tbusuario,
    infob_apn_tb_adm,
    infob_apn_tb_adocao,
    infob_apn_tb_pet,
    infob_apn_tb_user,
    infob_mw_ator,
    infob_mw_comentario,
    infob_mw_filme,
    infob_mw_filme_usuario,
    infob_mw_lista,
    infob_mw_lista_item,
    infob_mw_usuario,
    infoc_ntc_administrador,
    infoc_ntc_apoio_frase,
    infoc_ntc_caracteristica_fisica,
    infoc_ntc_denuncia,
    infoc_ntc_local,
    infoc_ntc_usuario,
    infoc_ntc_vestimento,
    infoc_tdv_adm,
    infoc_tdv_cliente,
    infoc_tdv_cupom,
    infoc_tdv_endereco,
    infoc_tdv_favorito,
    infoc_tdv_forma_pagamento,
    infoc_tdv_genero,
    infoc_tdv_livro,
    infoc_tdv_pedido,
    infoc_tdv_pedido_item,
    infoc_tht_cartao,
    infoc_tht_chat,
    infoc_tht_compra,
    infoc_tht_lugar,
    infoc_tht_pacote,
    infoc_tht_usuario,
    infod_leo_agendamento,
    infod_leo_cliente,
    infod_leo_funcionario,
    infod_leo_servico,
    infod_leo_servico_imagem,
    infod_ssc_cliente,
    infod_ssc_endereco,
    infod_ssc_estoque,
    infod_ssc_item_venda,
    infod_ssc_produto,
    infod_ssc_venda,
    infod_tif_acessos,
    infod_tif_amigos,
    infod_tif_animes,
    infod_tif_autorizados,
    infod_tif_chat,
    infod_tif_chat_mensagem,
    infod_tif_chat_usuario,
    infod_tif_comentario,
    infod_tif_comentario_post,
    infod_tif_comunidade,
    infod_tif_like,
    infod_tif_post,
    infod_tif_usuario,
  };
}
