import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_jdf_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
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
    ds_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bt_enviadoAdm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_jdf_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
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
  return infoc_jdf_chat;
  }
}
