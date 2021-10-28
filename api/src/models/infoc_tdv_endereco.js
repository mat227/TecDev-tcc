import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tdv_cliente',
        key: 'id_cliente'
      }
    },
    nm_rua: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cep: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ds_numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infoc_tdv_endereco;
  }
}
