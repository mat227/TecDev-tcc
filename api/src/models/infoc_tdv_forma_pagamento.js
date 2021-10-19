import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_forma_pagamento extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_forma_pagamento: {
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
    nr_cartao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_titular_cartao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_sobrenome_cartao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_vencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nr_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_cvv: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_forma_pagamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_forma_pagamento" },
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
  return infoc_tdv_forma_pagamento;
  }
}
