import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_avaliacao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_avaliacao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_produto',
        key: 'id_produto'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_cliente',
        key: 'id_cliente'
      }
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_avaliacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_avaliacao" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_avaliacao;
  }
}
