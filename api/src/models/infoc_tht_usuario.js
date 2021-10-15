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
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_usuraio: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nm_nick: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nr_cpf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.INTEGER,
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
