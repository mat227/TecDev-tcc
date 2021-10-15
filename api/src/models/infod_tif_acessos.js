import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_acessos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_acesso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_tela: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qtd_acessos: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_acessos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acesso" },
        ]
      },
    ]
  });
  return infod_tif_acessos;
  }
}
