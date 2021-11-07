import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_curriculo extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pessoal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_vaga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_curriculo: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_curriculo',
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
      {
        name: "id_empresa",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "id_pessoal",
        using: "BTREE",
        fields: [
          { name: "id_pessoal" },
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
  return infoc_atn_tb_curriculo;
  }
}
