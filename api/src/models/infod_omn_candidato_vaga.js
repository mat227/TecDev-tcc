import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_candidato_vaga extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_candidato_vaga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_candidato: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_vaga: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_omn_candidato_vaga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_candidato_vaga" },
        ]
      },
      {
        name: "id_candidato",
        using: "BTREE",
        fields: [
          { name: "id_candidato" },
        ]
      },
      {
        name: "id_vaga",
        using: "BTREE",
        fields: [
          { name: "id_vaga" },
        ]
      },
    ]
  });
  return infod_omn_candidato_vaga;
  }
}
