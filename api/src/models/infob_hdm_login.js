import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_login extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_login: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_nome: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nr_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bt_HDM_entrar: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_login',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_login" },
        ]
      },
    ]
  });
  return infob_hdm_login;
  }
}
