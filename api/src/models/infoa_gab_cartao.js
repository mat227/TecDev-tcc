import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_cartao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_cv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nr_agencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_titular: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_validade: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nr_cartao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ds_cpf_titular: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_cartao',
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
        name: "infoa_gab_cartao_fk0",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infoa_gab_cartao;
  }
}
