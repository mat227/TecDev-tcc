import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_bairro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nm_rua: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nr_numero_rua: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_cep: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_endereco',
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
        name: "infoa_gab_endereco_fk0",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infoa_gab_endereco;
  }
}
