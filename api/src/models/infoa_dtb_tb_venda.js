import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtb_tb_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_VENDA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_VENDA_ITEM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtb_tb_venda_item',
        key: 'ID_VENDA_ITEM'
      }
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtb_tb_cliente',
        key: 'ID_CLIENTE'
      }
    },
    VL_VENDA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    DS_PAGAMENTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DT_VENDA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtb_tb_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_VENDA" },
        ]
      },
      {
        name: "ID_VENDA_ITEM",
        using: "BTREE",
        fields: [
          { name: "ID_VENDA_ITEM" },
        ]
      },
      {
        name: "ID_CLIENTE",
        using: "BTREE",
        fields: [
          { name: "ID_CLIENTE" },
        ]
      },
    ]
  });
  return infoa_dtb_tb_venda;
  }
}
