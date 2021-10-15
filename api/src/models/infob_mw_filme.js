import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_filme extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_filme: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_filme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ano_lancamento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_diretor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_sinopse: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_avaliacao: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_plataforma: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    img_capa_maior: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    img_capa_menor: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_filme',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_filme" },
        ]
      },
    ]
  });
  return infob_mw_filme;
  }
}
