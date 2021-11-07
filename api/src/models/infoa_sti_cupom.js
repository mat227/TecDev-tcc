import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_cupom extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cupom: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_nome_desconto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_cupom: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_cupom',
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
  return infoa_sti_cupom;
  }
}
