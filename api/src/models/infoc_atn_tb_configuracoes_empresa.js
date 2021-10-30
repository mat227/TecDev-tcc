import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_configuracoes_empresa extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
    ds_twiter_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_link_imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_configuracoes_empresa',
    timestamps: false,
    indexes: [
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
