import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
    nr_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_cep: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_cidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_endereco',
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
    ]
  });
  return infod_ssc_endereco;
  }
}
