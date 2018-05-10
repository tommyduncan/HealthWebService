const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const AppUser = sequelize.define('AppUser', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, unique: true, allowNull: false },
        App_Account: { type: Sequelize.STRING, unique: true, allowNull: false },
        App_Password: { type: Sequelize.TEXT, allowNull: false }
    });

    return AppUser;
}

module.exports = define;
