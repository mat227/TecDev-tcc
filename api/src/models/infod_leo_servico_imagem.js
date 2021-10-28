import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_leo_servico_imagem extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_imagem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_servico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_leo_servico',
        key: 'id_servico'
      }
    },
    img_servico: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_leo_servico_imagem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_imagem" },
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
  return infod_leo_servico_imagem;
  }
}
