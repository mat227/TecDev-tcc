import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_ntc_administrador extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_administrador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_administrador: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_ntc_administrador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_administrador" },
        ]
      },
    ]
  });
  return infoc_ntc_administrador;
  }
}
