import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_compra_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_produto',
        key: 'id_produto'
      }
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_compra',
        key: 'id_compra'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_compra_item',
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
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_compra",
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
    ]
  });
  return infoc_tct_compra_item;
  }
}
