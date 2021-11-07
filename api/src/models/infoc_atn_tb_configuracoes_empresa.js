import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_configuracoes_empresa extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_empresaconfig: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_site: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_descricao_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_instagram_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_twitter_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_linkdin_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_link_imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_porte: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    qtd_funcionarios: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_configuracoes_empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresaconfig" },
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
  return infoc_atn_tb_configuracoes_empresa;
  }
}
