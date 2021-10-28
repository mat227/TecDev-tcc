import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_cliente',
        key: 'id_cliente'
      }
    },
    ds_nota_fiscal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tp_pagamento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bt_presente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dt_venda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_venda',
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
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_venda;
  }
}
