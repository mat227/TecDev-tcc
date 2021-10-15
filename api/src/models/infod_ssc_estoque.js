import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_estoque extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_estoque: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_estoque',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estoque" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infod_ssc_estoque;
  }
}
