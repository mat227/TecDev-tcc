import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_curriculo extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_objetivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_formacao_academica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_experiencia_profissional: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_idioma: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_atividade_complementar: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_omn_curriculo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
    ]
  });
  return infod_omn_curriculo;
  }
}
