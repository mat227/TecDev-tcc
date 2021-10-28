import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_leo_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ds_telefone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    img_cliente: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ds_codigo_rec: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_leo_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infod_leo_cliente;
  }
}
