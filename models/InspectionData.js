const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const InspectionData = sequelize.define('InspectionData', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.INTEGER, unique: true, allowNull: false },
        Height: { type: Sequelize.NUMERIC(3, 1) },
        Weight: { type: Sequelize.NUMERIC(3, 1) },
        Waist: { type: Sequelize.NUMERIC(3, 1) },
        tension: { type: Sequelize.INTEGER },
        ACSugar: { type: Sequelize.INTEGER },
        HbA1C: { type: Sequelize.INTEGER },
        BUN: { type: Sequelize.INTEGER },
        Creatinine: { type: Sequelize.INTEGER },
        eGFR: { type: Sequelize.INTEGER },
        TCH: { type: Sequelize.INTEGER },
        TG: { type: Sequelize.INTEGER },
        LDL: { type: Sequelize.INTEGER },
        UACR: { type: Sequelize.INTEGER },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.STRING(20), allowNull: false }
    });

    return InspectionData;
}

module.exports = define;
