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
      allowNull: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bt_adm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_perfil: {
      type: DataTypes.STRING(255),
      allowNull: true
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
