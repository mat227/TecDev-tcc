import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtb_tb_genero extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_GENERO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DS_GENERO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BT_ATIVO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtb_tb_genero',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_GENERO" },
        ]
      },
    ]
  });
  return infoa_dtb_tb_genero;
  }
}
