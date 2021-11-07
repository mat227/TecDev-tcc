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
      allowNull: false
    },
    'ds_classificação': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_temporadas: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_estrelando: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_sinopse: {
      type: DataTypes.STRING(5555),
      allowNull: false
    },
    ds_sobre: {
      type: DataTypes.STRING(5555),
      allowNull: false
    },
    ds_enredo: {
      type: DataTypes.STRING(5555),
      allowNull: false
    },
    ds_capa: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    dt_postagem: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_ano: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ds_video1: {
      type: DataTypes.STRING(1555),
      allowNull: false
    },
    ds_video2: {
      type: DataTypes.STRING(1555),
      allowNull: false
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
