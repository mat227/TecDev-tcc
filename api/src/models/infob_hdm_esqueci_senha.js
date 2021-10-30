import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_esqueci_senha extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_esqueci_senha: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nr_HDM_senha: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nm_HDM_nova_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_esqueci_senha',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_esqueci_senha" },
        ]
      },
    ]
  });
  return infob_hdm_esqueci_senha;
  }
}
