import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_cliente: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_celular: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_cliente',
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
        name: "id_endereco",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
    ]
  });
  return infoa_sti_cliente;
  }
}
