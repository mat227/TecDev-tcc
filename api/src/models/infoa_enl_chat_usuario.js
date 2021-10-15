import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_chat_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario_comprador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_chat_usuario',
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
        name: "id_usuario_comprador",
        using: "BTREE",
        fields: [
          { name: "id_usuario_comprador" },
        ]
      },
      {
        name: "id_usuario_vendedor",
        using: "BTREE",
        fields: [
          { name: "id_usuario_vendedor" },
        ]
      },
    ]
  });
  return infoa_enl_chat_usuario;
  }
}
