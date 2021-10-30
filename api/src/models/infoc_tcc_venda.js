import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tcc_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tcc_produto',
        key: 'id_produto'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tcc_cliente',
        key: 'id_cliente'
      }
    },
    dt_compra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_pagamento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_celular: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: true
    },
    ds_preco: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tcc_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
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
  return infoc_tcc_venda;
  }
}
