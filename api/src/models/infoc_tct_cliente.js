import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_endereco',
        key: 'id_endereco'
      }
    },
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_cartao',
        key: 'id_cartao'
      }
    },
    nm_nome: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_telefone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    bt_administrador: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_login: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_endereco",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
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
  return infoc_tct_cliente;
  }
}
