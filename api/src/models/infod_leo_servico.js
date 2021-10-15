import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_leo_servico extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_servico: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tp_servico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_servico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_servico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_servico: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_leo_servico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servico" },
        ]
      },
    ]
  });
  return infod_leo_servico;
  }
}
