import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_cidade: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ds_uf: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    ds_cep: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ds_logradouro: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nr_numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_endereco',
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
  return infoa_dtn_tb_endereco;
  }
}
