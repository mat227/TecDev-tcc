import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_categorias extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_categoria: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infoc_tct_categorias;
  }
}
