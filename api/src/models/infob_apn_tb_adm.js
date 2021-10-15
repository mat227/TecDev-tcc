import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_apn_tb_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_ADM: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DS_COD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_SENHA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_apn_tb_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ADM" },
        ]
      },
    ]
  });
  return infob_apn_tb_adm;
  }
}
