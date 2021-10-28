import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_HDM_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_HDM_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_HDM_usuario: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dt_HDM_data: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_chat" },
        ]
      },
      {
        name: "id_HDM_usuario",
        using: "BTREE",
        fields: [
          { name: "id_HDM_usuario" },
        ]
      },
    ]
  });
  return infob_hdm_chat;
  }
}
