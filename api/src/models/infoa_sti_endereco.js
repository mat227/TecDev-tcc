import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_cliente',
        key: 'id_cliente'
      }
    },
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_endereco: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cep: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infoa_sti_endereco;
  }
}
