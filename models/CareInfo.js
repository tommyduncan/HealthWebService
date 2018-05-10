const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const CareInfo = sequelize.define('CareInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT, allowNull: true },
        Doc_Name: { type: Sequelize.TEXT },
        Doc_Name_2: { type: Sequelize.TEXT },
        EducationDate: { type: Sequelize.TEXT },
        EducationTarget: { type: DataTypes.CHAR(1) },
        Method: { type: DataTypes.CHAR(1) },
        EducationContent: { type: Sequelize.TEXT },
        MedicineUse: { type: Sequelize.TEXT },
        Reason: { type: Sequelize.TEXT },
        AdmissionDate: { type: DataTypes.CHAR(8) },
        DischargeDate: { type: DataTypes.CHAR(8) },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.STRING(20), allowNull: false }
    });

    return CareInfo;
}

module.exports = define;