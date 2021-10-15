import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_apn_tb_pet extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_PET: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NM_PET: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_ESPECIE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NM_RACA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_SEXO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_PESO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DT_NASCIMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DS_PORTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_DESC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IMG_PET1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IMG_PET2: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IMG_PET3: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    BT_CASTRADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_V10: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_V8: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_V5: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_V4: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_V3: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BT_VACINA_ANTIRRABICA: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DT_CADASTRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BT_DISPONIVEL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_apn_tb_pet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_PET" },
        ]
      },
    ]
  });
  return infob_apn_tb_pet;
  }
}
