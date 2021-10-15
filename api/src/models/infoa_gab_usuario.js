import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_usuario extends Model {
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
      allowNull: false
    },
    ds_cpf: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bt_gerente: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ds_codigo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_usuario',
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
  return infoa_gab_usuario;
  }
}
