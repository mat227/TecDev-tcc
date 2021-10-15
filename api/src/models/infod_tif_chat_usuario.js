import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_chat_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_chat_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat_usuario" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infod_tif_chat_usuario;
  }
}
