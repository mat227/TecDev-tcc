import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_candidato extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_candidato: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_candidato: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_sexo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_nacionalidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_telefone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_estado_civil: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_localidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_omn_candidato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_candidato" },
        ]
      },
      {
        name: "id_curriculo",
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
    ]
  });
  return infod_omn_candidato;
  }
}
