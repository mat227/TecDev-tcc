import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_cep: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cidade: {
      type: DataTypes.STRING(100),
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
    ]
  });
  return infoa_sti_endereco;
  }
}
