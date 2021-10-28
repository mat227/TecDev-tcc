import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class insf_tb_usuario_endereco_uf extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario_endereco_uf: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'insf_tb_usuario_endereco',
        key: 'id_usuario_endereco'
      }
    },
    ds_estado: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_pais: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insf_tb_usuario_endereco_uf',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_endereco_uf" },
        ]
      },
      {
        name: "id_usuario_endereco",
        using: "BTREE",
        fields: [
          { name: "id_usuario_endereco" },
        ]
      },
    ]
  });
  return insf_tb_usuario_endereco_uf;
  }
}
