import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_venda_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_vendas: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_venda_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda_produto" },
        ]
      },
      {
        name: "id_vendas",
        using: "BTREE",
        fields: [
          { name: "id_vendas" },
        ]
      },
    ]
  });
  return infoa_sti_venda_produto;
  }
}
