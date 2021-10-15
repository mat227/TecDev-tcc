import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_apn_tb_adocao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    ID_ADOCAO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_PET: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NM_NOME_COMPLETO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DT_NASCIMENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DS_RG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_TELEFONE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_CEP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_NUMERO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_COMPLEMENTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DS_BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DT_SOLICITACAO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BT_ADOCAO_CONCLUIDA: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DT_ADOCAO: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_apn_tb_adocao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ADOCAO" },
        ]
      },
      {
        name: "ID_USER",
        using: "BTREE",
        fields: [
          { name: "ID_USER" },
        ]
      },
      {
        name: "ID_PET",
        using: "BTREE",
        fields: [
          { name: "ID_PET" },
        ]
      },
    ]
  });
  return infob_apn_tb_adocao;
  }
}
