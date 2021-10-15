import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_post extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_post: {
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
    id_comentario_post: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_data_postagem: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_like: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_post" },
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
        name: "id_comentario_post",
        using: "BTREE",
        fields: [
          { name: "id_comentario_post" },
        ]
      },
    ]
  });
  return infod_tif_post;
  }
}
