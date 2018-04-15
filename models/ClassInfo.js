const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const ClassInfo = sequelize.define('ClassInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false },
        Clinic_Name: { type: DataTypes.STRING(50), allowNull: true },
        Class_Name: { type: DataTypes.STRING(10), allowNull: false },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.STRING(20), allowNull: false }
    });

    return ClassInfo;
}

module.exports = define;
