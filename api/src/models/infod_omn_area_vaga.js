import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_area_vaga extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_area_vaga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_area_vaga: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_omn_area_vaga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_area_vaga" },
        ]
      },
    ]
  });
  return infod_omn_area_vaga;
  }
}
