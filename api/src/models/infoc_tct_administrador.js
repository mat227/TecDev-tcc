import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_administrador extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_administrador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ds_login: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_administrador',
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
  return infoc_tct_administrador;
  }
}
