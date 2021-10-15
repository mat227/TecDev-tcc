import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_empresa extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_empresa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_empresa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_empresa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
  return infoa_gab_empresa;
  }
}
