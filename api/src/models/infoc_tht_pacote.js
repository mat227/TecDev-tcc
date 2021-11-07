import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_pacote extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pacote: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_pacote: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_ingresso: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ds_horario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_cancelamento: {
      type: DataTypes.STRING(115),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(115),
      allowNull: true
    },
    ds_acesso: {
      type: DataTypes.STRING(115),
      allowNull: true
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_pacote',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pacote" },
        ]
      },
    ]
  });
  return infoc_tht_pacote;
  }
}
