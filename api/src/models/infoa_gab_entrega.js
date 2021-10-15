import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_entrega extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_entrega: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_situacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_venda_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_entrega',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_entrega" },
        ]
      },
      {
        name: "id_endereco",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
      {
        name: "id_venda_item",
        using: "BTREE",
        fields: [
          { name: "id_venda_item" },
        ]
      },
    ]
  });
  return infoa_gab_entrega;
  }
}
