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
      allowNull: false,
      references: {
        model: 'infoa_enl_login',
        key: 'id_login'
      }
    },
    nm_nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nm_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_senha: {
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
      type: DataTypes.STRING(15),
      allowNull: false
    },
    nr_telefone: {
      type: DataTypes.STRING(15),
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
    ds_bairro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ds_cidade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bt_sexo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    img_foto: {
      type: DataTypes.STRING(5000),
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
