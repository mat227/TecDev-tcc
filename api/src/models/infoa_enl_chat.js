import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_usuario',
        key: 'id_usuario'
      }
    },
    id_chat_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_chat_usuario',
        key: 'id_chat_usuario'
      }
    },
    ds_mensagem: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_chat',
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
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_chat_usuario",
        using: "BTREE",
        fields: [
          { name: "id_chat_usuario" },
        ]
      },
    ]
  });
  return infoa_enl_chat;
  }
}
