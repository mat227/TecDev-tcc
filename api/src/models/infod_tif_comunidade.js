import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_comunidade extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_comunidade: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_capa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_comunidade: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_comunidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infod_tif_comunidade;
  }
}
