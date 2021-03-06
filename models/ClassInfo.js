const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const ClassInfo = sequelize.define('ClassInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT, allowNull: true },
        Class_Name: { type: Sequelize.TEXT, allowNull: false },
        Doc_Name_2: { type: Sequelize.TEXT, allowNull: false },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.TEXT, allowNull: false }
    });

    return ClassInfo;
}

module.exports = define;
