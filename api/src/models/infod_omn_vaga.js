import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_vaga extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_vaga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_vaga: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_salario: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_area_vaga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_jornada: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tp_contrato: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qtd_vaga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_publicada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_vaga: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_exigencia: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_beneficio: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_omn_vaga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vaga" },
        ]
      },
      {
        name: "id_empresa",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "id_area_vaga",
        using: "BTREE",
        fields: [
          { name: "id_area_vaga" },
        ]
      },
    ]
  });
  return infod_omn_vaga;
  }
}
