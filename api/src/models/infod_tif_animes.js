import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_animes extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_anime: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_anime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'ds_classificação': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_temporadas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_estrelando: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_sinopse: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    ds_sobre: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    ds_enredo: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    ds_capa: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    dt_postagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_ano: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_video1: {
      type: DataTypes.STRING(1555),
      allowNull: true
    },
    ds_video2: {
      type: DataTypes.STRING(1555),
      allowNull: true
    },
    ds_imagem: {
      type: DataTypes.STRING(1555),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_tif_animes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_anime" },
        ]
      },
    ]
  });
  return infod_tif_animes;
  }
}
