import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_chat_denuncias extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_chat_denuncias: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_HDM_texto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    bt_HDM_enviar: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_HDM_localizacao_atual: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_chat_denuncias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_chat_denuncias" },
        ]
      },
    ]
  });
  return infob_hdm_chat_denuncias;
  }
}
