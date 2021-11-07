import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_venda_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda_item: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_venda',
        key: 'id_venda'
      }
    },
    ds_qrcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_calendario_item: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_calendario_item',
        key: 'id_calendario_item'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_venda_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda_item" },
        ]
      },
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "FK_calendario_item",
        using: "BTREE",
        fields: [
          { name: "id_calendario_item" },
        ]
      },
    ]
  });
  return infoc_nws_tb_venda_item;
  }
}
