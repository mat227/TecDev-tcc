import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_ntc_denuncia extends Model {
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
        model: 'infoc_ntc_usuario',
        key: 'id_usuario'
      }
    },
    ds_depoimento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_local: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_ntc_local',
        key: 'id_local'
      }
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_fisico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_ntc_caracteristica_fisica',
        key: 'id_fisico'
      }
    },
    id_vestimento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_ntc_vestimento',
        key: 'id_vestimento'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_ntc_denuncia',
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
      {
        name: "id_local",
        using: "BTREE",
        fields: [
          { name: "id_local" },
        ]
      },
      {
        name: "id_fisico",
        using: "BTREE",
        fields: [
          { name: "id_fisico" },
        ]
      },
      {
        name: "id_vestimento",
        using: "BTREE",
        fields: [
          { name: "id_vestimento" },
        ]
      },
    ]
  });
  return infoc_ntc_denuncia;
  }
}
