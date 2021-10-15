import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_cliente: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ds_cpf: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ds_cpf"
    },
    ds_telefone: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_cliente',
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
      {
        name: "ds_cpf",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ds_cpf" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_cliente;
  }
}
