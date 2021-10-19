import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class insf_tb_usuario_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'insf_tb_usuario',
        key: 'id_usuario'
      }
    },
    ds_endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cep: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insf_tb_usuario_endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_endereco" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return insf_tb_usuario_endereco;
  }
}
