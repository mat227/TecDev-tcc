import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_vagas extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_vaga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_profissao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_qualificacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_local_trabalho: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_formacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_salario_de: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_salario_a: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_tipo_contratacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_beneficios: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_hora_trabalho: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_vagas',
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
    ]
  });
  return infoc_atn_tb_vagas;
  }
}
