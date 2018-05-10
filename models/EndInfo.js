const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const EndInfo = sequelize.define('EndInfo', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT },
        BeginTime: {type: Sequelize.TEXT },
        endDate: {type: Sequelize.TEXT },
        endReason: {type: Sequelize.TEXT },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.TEXT, allowNull: false }
    });

    return EndInfo;
}

module.exports = define;
