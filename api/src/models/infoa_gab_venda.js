import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dt_venda: {
      type: DataTypes.DATE,
      allowNull: false
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bt_situacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ds_pagamento: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_venda',
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
        name: "infoa_gab_venda_fk0",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infoa_gab_venda;
  }
}
