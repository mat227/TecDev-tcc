import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_vendas_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_vendas_item: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_vendas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_vendas',
        key: 'id_vendas'
      }
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_vendas_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vendas_item" },
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
  return infoa_sti_vendas_item;
  }
}
