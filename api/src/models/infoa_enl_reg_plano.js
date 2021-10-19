import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_reg_plano extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_reg_plano: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_plano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_plano',
        key: 'id_plano'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infoa_enl_usuario',
        key: 'id_usuario'
      }
    },
    dt_aquisicao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_expiracao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_reg_plano',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reg_plano" },
        ]
      },
      {
        name: "id_plano",
        using: "BTREE",
        fields: [
          { name: "id_plano" },
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
  return infoa_enl_reg_plano;
  }
}
