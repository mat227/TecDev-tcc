import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_leo_agendamento extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_agendamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_funcionario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_servico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_agendamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tp_situacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_leo_agendamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_agendamento" },
        ]
      },
      {
        name: "id_funcionario",
        using: "BTREE",
        fields: [
          { name: "id_funcionario" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_servico",
        using: "BTREE",
        fields: [
          { name: "id_servico" },
        ]
      },
    ]
  });
  return infod_leo_agendamento;
  }
}
