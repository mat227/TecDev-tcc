import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_sala extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_sala: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_sala: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_ativa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_empresa',
        key: 'id_empresa'
      }
    },
    id_pessoal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_pessoal',
        key: 'id_pessoal'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_sala',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sala" },
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
    ]
  });
  return infoc_atn_tb_sala;
  }
}
