import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_amz_tbdenuncia extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_denuncia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_amz_tbusuario',
        key: 'id_usuario'
      }
    },
    ds_longitude: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: true
    },
    ds_latitude: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: true
    },
    dt_denuncia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_ocorrencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_rua: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qtd_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_tipo_denuncia: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_amz_tbdenuncia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_denuncia" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_amz_tbdenuncia;
  }
}
