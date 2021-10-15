import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_usuario extends Model {
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
      allowNull: false
    },
    nm_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_cpf: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    nr_celular: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    nr_telefone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ds_cep: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    nr_casa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_sexo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_usuario',
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
    ]
  });
  return infoa_enl_usuario;
  }
}
