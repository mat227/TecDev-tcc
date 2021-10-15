import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_plano extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_plano: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vl_plano: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    bt_ativo: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_plano',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_plano" },
        ]
      },
    ]
  });
  return infoa_enl_plano;
  }
}
