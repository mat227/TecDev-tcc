import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_login extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_login: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dt_ult_login: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_registro: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_login',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_login" },
        ]
      },
    ]
  });
  return infoa_enl_login;
  }
}
