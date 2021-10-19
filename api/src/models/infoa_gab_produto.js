import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_produto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ds_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_codigo_barra: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bt_situacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vl_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img_produto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    img_secundaria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_terciaria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_quartenaria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_plataforma: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_produto',
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
  return infoa_gab_produto;
  }
}
