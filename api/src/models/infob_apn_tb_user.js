import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_apn_tb_user extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_USER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NM_USER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NM_SOBRENOME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_SENHA: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_apn_tb_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_USER" },
        ]
      },
    ]
  });
  return infob_apn_tb_user;
  }
}
