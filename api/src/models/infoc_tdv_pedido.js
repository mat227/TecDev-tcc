import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_pedido extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pedido: {
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
    id_cupom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tdv_cupom',
        key: 'id_cupom'
      }
    },
    nr_pedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_situacao_ped: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_pedido',
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
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_cupom",
        using: "BTREE",
        fields: [
          { name: "id_cupom" },
        ]
      },
    ]
  });
  return infoc_tdv_pedido;
  }
}
