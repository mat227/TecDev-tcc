import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_compra extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_compra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_cliente',
        key: 'id_cliente'
      }
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_endereco',
        key: 'id_endereco'
      }
    },
    ds_nota_fiscal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_forma_pagamento: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
      {
        name: "id_cliente",
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
  return infoc_tct_compra;
  }
}
