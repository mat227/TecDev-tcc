import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class insf_tb_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_produto: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    img_produto: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    dt_lancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insf_tb_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return insf_tb_produto;
  }
}
