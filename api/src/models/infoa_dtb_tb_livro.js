import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtb_tb_livro extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_LIVRO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NM_LIVRO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ID_GENERO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtb_tb_genero',
        key: 'ID_GENERO'
      }
    },
    DS_CAPA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BT_DISPONIVEL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VL_PRECO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    NM_AUTOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DT_LANCAMENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VL_AVALIACAO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    QTD_PAGINAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtb_tb_livro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_LIVRO" },
        ]
      },
      {
        name: "ID_GENERO",
        using: "BTREE",
        fields: [
          { name: "ID_GENERO" },
        ]
      },
    ]
  });
  return infoa_dtb_tb_livro;
  }
}
