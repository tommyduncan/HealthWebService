const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const InspectionData = sequelize.define('InspectionData', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, allowNull: false },
        Inspectionday: { type: DataTypes.CHAR(8), allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT, allowNull: false },
        Class_Name: { type: Sequelize.TEXT, allowNull: false},
        Height: { type: Sequelize.NUMERIC(4, 1) },
        Weight: { type: Sequelize.NUMERIC(4, 1) },
        Waist: { type: Sequelize.NUMERIC(4, 1) },
        SBP: { type: Sequelize.INTEGER },
        DBP: { type: Sequelize.INTEGER },
        ACSugar: { type: Sequelize.INTEGER },
        HbA1C: { type: Sequelize.DECIMAL(4, 2) },
        BUN: { type: Sequelize.INTEGER },
        Creatinine: { type: Sequelize.DECIMAL(2, 1) },
        eGFR: { type: Sequelize.INTEGER },
        stage: { type: Sequelize.TEXT },
        TCH: { type: Sequelize.INTEGER },
        TG: { type: Sequelize.INTEGER },
        LDL: { type: Sequelize.INTEGER },
        UACR: { type: Sequelize.INTEGER },
        UR: { type: Sequelize.INTEGER },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.TEXT, allowNull: false }
    });

    return InspectionData;
}

module.exports = define;
