import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ds_estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nm_cidade: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nm_rua: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ds_numero: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_ponto_referencia: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_endereco',
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
  return infoc_tct_endereco;
  }
}
