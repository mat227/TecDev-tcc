import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_nome: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_HDM_sobrenome: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_HDM_email: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_HDM_senha: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_usuario" },
        ]
      },
      {
        name: "nm_HDM_nome",
        using: "BTREE",
        fields: [
          { name: "nm_HDM_nome" },
        ]
      },
      {
        name: "nm_HDM_email",
        using: "BTREE",
        fields: [
          { name: "nm_HDM_email" },
        ]
      },
      {
        name: "nm_HDM_senha",
        using: "BTREE",
        fields: [
          { name: "nm_HDM_senha" },
        ]
      },
    ]
  });
  return infob_hdm_usuario;
  }
}
