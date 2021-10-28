import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nr_cep: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_rua: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_casa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_referencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_endereco',
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
  return tb_endereco;
  }
}
