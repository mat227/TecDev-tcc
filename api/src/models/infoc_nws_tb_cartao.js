import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_cartao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_venda',
        key: 'id_venda'
      }
    },
    nr_cartao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cvc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_titular: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_cartao',
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
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
    ]
  });
  return infoc_nws_tb_cartao;
  }
}
