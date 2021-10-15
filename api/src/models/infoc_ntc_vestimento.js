import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_ntc_vestimento extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_vestimento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tp_vestimento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_valor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_ntc_vestimento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vestimento" },
        ]
      },
    ]
  });
  return infoc_ntc_vestimento;
  }
}
