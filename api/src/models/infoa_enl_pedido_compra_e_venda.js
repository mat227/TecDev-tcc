import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_pedido_compra_e_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pedido_compra_e_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_produto',
        key: 'id_produto'
      }
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_pedido',
        key: 'id_pedido'
      }
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vl_pedido_compra_e_venda: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_pedido_compra_e_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pedido_compra_e_venda" },
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
  return infoa_enl_pedido_compra_e_venda;
  }
}
