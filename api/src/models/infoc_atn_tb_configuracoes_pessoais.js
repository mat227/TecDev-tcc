import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_configuracoes_pessoais extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pessoal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_sobre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_idioma1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_idioma2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_idioma3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_linkedin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_instagram: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_twiter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_vagas_interesse1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_vagas_interesse2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_vagas_interesse3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_esperiencias: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_formacoes_academicas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_link_imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_configuracoes_pessoais',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pessoal" },
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
  return infoc_atn_tb_configuracoes_pessoais;
  }
}
