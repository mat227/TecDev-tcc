import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_titulo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    nm_produto: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ds_descricao: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    id_tamanho: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img_imagem: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_produto',
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
      {
        name: "id_tamanho",
        using: "BTREE",
        fields: [
          { name: "id_tamanho" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_produto;
  }
}
