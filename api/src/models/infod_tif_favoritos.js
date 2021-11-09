import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_favoritos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_favoritos: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_anime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_tif_favoritos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_favoritos" },
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
        name: "id_anime",
        using: "BTREE",
        fields: [
          { name: "id_anime" },
        ]
      },
    ]
  });
  return infod_tif_favoritos;
  }
}
