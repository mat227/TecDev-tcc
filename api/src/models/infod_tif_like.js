import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_like extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_like: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_like: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_deslike: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_like" },
        ]
      },
    ]
  });
  return infod_tif_like;
  }
}
