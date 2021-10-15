import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_chat_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_chat_mensagem: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_chat',
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
        name: "id_chat_usuario",
        using: "BTREE",
        fields: [
          { name: "id_chat_usuario" },
        ]
      },
      {
        name: "id_chat_mensagem",
        using: "BTREE",
        fields: [
          { name: "id_chat_mensagem" },
        ]
      },
    ]
  });
  return infod_tif_chat;
  }
}
