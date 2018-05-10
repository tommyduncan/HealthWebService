const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const AppInfo = sequelize.define('AppInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT },
        Record_Date: { type: Sequelize.TEXT, allowNull: false},
        movement: { type: Sequelize.CHAR(1), allowNull: false },
        Movement_Time: { type: Sequelize.CHAR(1) },
        Day_Record: { type: Sequelize.TEXT }
    });

    return AppInfo;
}

module.exports = define;
