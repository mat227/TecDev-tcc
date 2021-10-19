import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_livro extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_livro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_livro: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    vl_de: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    vl_para: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    dt_lancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_autora: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ds_editora: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    id_genero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tdv_genero',
        key: 'id_genero'
      }
    },
    bt_disponivel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_imagen: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ds_brochura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_promocao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_livro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
      {
        name: "id_genero",
        using: "BTREE",
        fields: [
          { name: "id_genero" },
        ]
      },
    ]
  });
  return infoc_tdv_livro;
  }
}
