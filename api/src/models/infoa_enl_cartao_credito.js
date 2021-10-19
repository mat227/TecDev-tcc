import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_cartao_credito extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao_credito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_usuario',
        key: 'id_usuario'
      }
    },
    nr_cartao: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    nr_cvc: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    dt_validade: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_cartao_credito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cartao_credito" },
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
  return infoa_enl_cartao_credito;
  }
}
