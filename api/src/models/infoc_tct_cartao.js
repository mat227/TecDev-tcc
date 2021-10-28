import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_cartao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_dono: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nr_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dt_validade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_cvv: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_cartao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
    ]
  });
  return infoc_tct_cartao;
  }
}
