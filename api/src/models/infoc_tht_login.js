import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_login extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_login: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cadastro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tht_cadastro',
        key: 'id_cadastro'
      }
    },
    ds_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_login',
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
      {
        name: "id_cadastro",
        using: "BTREE",
        fields: [
          { name: "id_cadastro" },
        ]
      },
    ]
  });
  return infoc_tht_login;
  }
}
