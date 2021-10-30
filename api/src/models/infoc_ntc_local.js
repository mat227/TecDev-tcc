import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_ntc_local extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_local: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_ntc_local',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_local" },
        ]
      },
    ]
  });
  return infoc_ntc_local;
  }
}
