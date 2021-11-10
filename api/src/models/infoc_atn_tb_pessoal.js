import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_pessoal extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pessoal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_area: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cargo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_telefone: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ds_estado_cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_codigo_rec: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bl_assinatura: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_pessoal',
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
    ]
  });
  return infoc_atn_tb_pessoal;
  }
}
