import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_login_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_login_adm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_nome_adm: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nr_senha_adm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bt_HDM_entrar_adm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_login_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_login_adm" },
        ]
      },
    ]
  });
  return infob_hdm_login_adm;
  }
}
