import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_categoria extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_categoria: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_categoria',
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
  return infoa_enl_categoria;
  }
}
