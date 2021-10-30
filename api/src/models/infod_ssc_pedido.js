import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_pedido extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_ssc_venda',
        key: 'id_venda'
      }
    },
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_ssc_item',
        key: 'id_item'
      }
    },
    vl_pedido: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    dt_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_entregue: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_acaminho: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_preparando: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pedido" },
        ]
      },
      {
        name: "id_item",
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
    ]
  });
  return infod_ssc_pedido;
  }
}
