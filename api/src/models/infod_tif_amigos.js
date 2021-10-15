import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_amigos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_amigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario_solicitou: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario_aceitou: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_amigos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_amigo" },
        ]
      },
      {
        name: "id_usuario_solicitou",
        using: "BTREE",
        fields: [
          { name: "id_usuario_solicitou" },
        ]
      },
      {
        name: "id_usuario_aceitou",
        using: "BTREE",
        fields: [
          { name: "id_usuario_aceitou" },
        ]
      },
    ]
  });
  return infod_tif_amigos;
  }
}
