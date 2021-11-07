import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_jdf_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_jdf_cartao',
        key: 'id_cartao'
      }
    },
    nm_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_telefone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senhaEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_jdf_cliente',
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
        name: "id_cartao",
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
    ]
  });
  return infoc_jdf_cliente;
  }
}
