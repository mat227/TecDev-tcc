import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tcc_venda_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tcc_produto',
        key: 'id_produto'
      }
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tcc_venda',
        key: 'id_venda'
      }
    },
    qtd_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img_link: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tcc_venda_item',
    timestamps: false,
    indexes: [
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
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
  return infoc_tcc_venda_item;
  }
}
