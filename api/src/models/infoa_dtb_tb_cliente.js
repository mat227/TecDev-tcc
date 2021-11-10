import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtb_tb_cliente extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_CLIENTE: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NM_CLIENTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NR_CONTATO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DT_NASCIMENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NR_CPF: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    DS_ENDERECO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BT_ATIVO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtb_tb_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_CLIENTE" },
        ]
      },
    ]
  });
  return infoa_dtb_tb_cliente;
  }
}
