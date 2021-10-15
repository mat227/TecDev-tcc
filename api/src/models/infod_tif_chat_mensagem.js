import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_chat_mensagem extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat_mensagem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_chat_mensagem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat_mensagem" },
        ]
      },
    ]
  });
  return infod_tif_chat_mensagem;
  }
}
