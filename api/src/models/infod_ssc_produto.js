import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_produto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_categoria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_produto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ds_avaliacao: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    qtd_disponivel_estoque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_produto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_produto',
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
  return infod_ssc_produto;
  }
}
