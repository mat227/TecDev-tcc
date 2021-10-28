import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tcc_cliente extends Model {
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
        model: 'infoc_tcc_endereco',
        key: 'id_endereco'
      }
    },
    nm_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nr_celular: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_cpf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qtd_compra: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tcc_cliente',
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
  return infoc_tcc_cliente;
  }
}
