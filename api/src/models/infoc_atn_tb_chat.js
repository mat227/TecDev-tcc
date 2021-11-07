import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sala: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tp_enviado_por: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_chat',
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
        name: "id_sala",
        using: "BTREE",
        fields: [
          { name: "id_sala" },
        ]
      },
    ]
  });
  return infoc_atn_tb_chat;
  }
}
