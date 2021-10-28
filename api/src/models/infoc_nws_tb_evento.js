import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_evento extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_evento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_categoria',
        key: 'id_categoria'
      }
    },
    nm_evento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_duracao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ds_classificacao: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    vl_ingresso: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ds_local: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_min: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_max: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_elenco: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_evento: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    img_capa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img_fundo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img_sec: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dt_inclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_evento" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infoc_nws_tb_evento;
  }
}
