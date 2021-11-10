import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_jdf_item_pedido extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_itemPedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_jdf_pedido',
        key: 'id_pedido'
      }
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_jdf_produto',
        key: 'id_produto'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_jdf_item_pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_itemPedido" },
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
        name: "id_pedido",
        using: "BTREE",
        fields: [
          { name: "id_pedido" },
        ]
      },
    ]
  });
  return infoc_jdf_item_pedido;
  }
}
