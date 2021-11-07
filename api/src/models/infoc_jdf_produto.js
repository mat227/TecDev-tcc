import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_jdf_produto extends Model {
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
      allowNull: true
    },
    vl_produto: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ds_produto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bt_maisVendidos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nr_codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_jdf_produto',
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
  return infoc_jdf_produto;
  }
}
