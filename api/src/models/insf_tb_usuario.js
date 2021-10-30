import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class insf_tb_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_codigo_rec: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_inclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insf_tb_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return insf_tb_usuario;
  }
}
