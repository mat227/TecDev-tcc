import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_vendas extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_vendas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_cliente',
        key: 'id_cliente'
      }
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_produto',
        key: 'id_produto'
      }
    },
    ds_codigo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dt_vendas: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_vendas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vendas" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infoa_sti_vendas;
  }
}
