import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_sobrenome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_localizacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ds_redes_sociais: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ds_foto: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_usuario',
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
  return infob_mw_usuario;
  }
}
