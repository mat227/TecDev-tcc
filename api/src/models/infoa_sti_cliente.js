import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_sobrenome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_sexo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_endereco',
        key: 'id_endereco'
      }
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_cliente',
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
    ]
  });
  return infoa_sti_cliente;
  }
}
