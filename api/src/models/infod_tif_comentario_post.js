import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_comentario_post extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_comentario_post: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_comentario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_comentario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_like: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_comentario_post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comentario_post" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_comunidade",
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
        ]
      },
      {
        name: "id_like",
        using: "BTREE",
        fields: [
          { name: "id_like" },
        ]
      },
    ]
  });
  return infod_tif_comentario_post;
  }
}
