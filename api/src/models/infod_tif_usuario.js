import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(19),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ds_telefone: {
      type: DataTypes.STRING(19),
      allowNull: false
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bt_login_face: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_login_insta: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_login_google: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_online: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ds_perfil: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_usuario',
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
  return infod_tif_usuario;
  }
}
