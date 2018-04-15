const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const AppInfo = sequelize.define('AppInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.INTEGER, primaryKey: true },
        Clinic_Name: { type: DataTypes.STRING(50) },
        Record_Date: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        movement: { type: Sequelize.CHAR(1), allowNull: false },
        Movement_Time: { type: Sequelize.CHAR(1) },
        Day_Record: { type: DataTypes.STRING(100) }
    });

    return AppInfo;
}

module.exports = define;
