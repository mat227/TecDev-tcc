import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_categorias',
        key: 'id_categoria'
      }
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_codigo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ds_embalagem: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nm_marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_peso: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    bt_promocao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infoc_tct_produto;
  }
}
