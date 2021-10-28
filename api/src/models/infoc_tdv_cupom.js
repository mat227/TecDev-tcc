import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_cupom extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cupom: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dt_duracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vl_porcentagem: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ds_regra: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_nome: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_cupom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cupom" },
        ]
      },
    ]
  });
  return infoc_tdv_cupom;
  }
}
