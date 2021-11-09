import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_cadastro extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cadastro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nr_celular: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_nome: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_cadastro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cadastro" },
        ]
      },
    ]
  });
  return infoc_tht_cadastro;
  }
}
