import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img_produto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_codigo_interno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_categoria',
        key: 'id_categoria'
      }
    },
    ds_descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_valor: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    nr_estoque_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_estoque_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_estoque_atual: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_produto',
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
  return infoa_sti_produto;
  }
}
