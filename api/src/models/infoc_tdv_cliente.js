import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    nr_contato: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_cliente',
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
  return infoc_tdv_cliente;
  }
}
