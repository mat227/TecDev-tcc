import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_autorizados extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_autorizados: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bt_postar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_criar_comunidade: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_alterar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_adicionar_pessoas: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_banir: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_silenciar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_promover_adm: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bt_permitir_entrada: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_tif_autorizados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_autorizados" },
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
        name: "id_comunidade",
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
        ]
      },
    ]
  });
  return infod_tif_autorizados;
  }
}
