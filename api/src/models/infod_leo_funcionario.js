import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_leo_funcionario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_funcionario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cargo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ds_telefone: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_leo_funcionario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funcionario" },
        ]
      },
    ]
  });
  return infod_leo_funcionario;
  }
}
