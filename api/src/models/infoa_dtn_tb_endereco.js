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
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_cliente',
        key: 'id_cliente'
      }
    },
    nm_cidade: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_uf: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ds_cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ds_logradouro: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ds_numero: {
      type: DataTypes.STRING(10),
      allowNull: true
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
