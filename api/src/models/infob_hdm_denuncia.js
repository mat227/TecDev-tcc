import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_denuncia extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_denuncia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bt_HDM_caracteristicas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_HDM_caracteristicas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bt_HDM_chat_denucnias: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nm_HDM_chat_denuncias: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bt_HDM_localizacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dt_HDM_localizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_denuncia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_denuncia" },
        ]
      },
    ]
  });
  return infob_hdm_denuncia;
  }
}
