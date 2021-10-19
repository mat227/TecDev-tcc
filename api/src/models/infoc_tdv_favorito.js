import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_favorito extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_favorito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tdv_cliente',
        key: 'id_cliente'
      }
    },
    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tdv_livro',
        key: 'id_livro'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_favorito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_favorito" },
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
        name: "id_livro",
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
    ]
  });
  return infoc_tdv_favorito;
  }
}
