import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_lugar extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_lugar: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_lugar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_avaliacao: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    ds_edereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_informacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_dias: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_horario: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_lugar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lugar" },
        ]
      },
    ]
  });
  return infoc_tht_lugar;
  }
}
