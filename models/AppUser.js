const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const AppUser = sequelize.define('AppUser', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.INTEGER, primaryKey: true },
        App_Account: { type: DataTypes.STRING(10), allowNull: false },
        App_Password: { type: DataTypes.STRING, allowNull: false }
    });

    return AppUser;
}

module.exports = define;
