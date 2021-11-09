import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_login: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tht_login',
        key: 'id_login'
      }
    },
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tht_cartao',
        key: 'id_cartao'
      }
    },
    nm_usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nr_celular: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_usuario',
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
      {
        name: "id_login",
        using: "BTREE",
        fields: [
          { name: "id_login" },
        ]
      },
      {
        name: "id_cartao",
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
    ]
  });
  return infoc_tht_usuario;
  }
}
