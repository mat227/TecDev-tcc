import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tcc_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bt_disponivel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_tamanho: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cores: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_fornecedor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_demanda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vl_preco_de: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vl_preco_por: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vl_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img_produto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    img_produto_primaria: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    img_produto_secundaria: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    img_produto_terciaria: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    img_produto_quarta: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tcc_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infoc_tcc_produto;
  }
}
