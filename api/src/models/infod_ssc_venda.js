import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_venda extends Model {
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
        model: 'infod_ssc_cliente',
        key: 'id_cliente'
      }
    },
    id_endereco_entrega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_ssc_endereco',
        key: 'id_endereco'
      }
    },
    ds_entrega: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_frete: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_destinatario: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tp_forma_pagamento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_pagamento: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nr_cartao: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_codigo_seguranca: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_venda',
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
      {
        name: "id_endereco_entrega",
        using: "BTREE",
        fields: [
          { name: "id_endereco_entrega" },
        ]
      },
    ]
  });
  return infod_ssc_venda;
  }
}
