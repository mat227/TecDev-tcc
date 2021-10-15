import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_tamanhos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_tamanho: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tp_pequeno: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tp_medio: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tp_grande: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tp_grande_grande: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tp_extra_grande: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tp_25: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_26: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_27: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_28: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_29: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_30: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_31: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_32: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_33: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_34: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_35: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_36: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_37: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_38: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_39: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_40: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_41: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_42: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_43: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_44: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_7_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_8_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_9_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_10_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_12_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_14_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tp_16_anos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_tamanhos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tamanho" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_tamanhos;
  }
}
