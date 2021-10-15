import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_adm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_login: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_adm" },
        ]
      },
    ]
  });
  return infoc_tdv_adm;
  }
}
