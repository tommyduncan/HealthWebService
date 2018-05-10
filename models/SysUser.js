const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const SysUser = sequelize.define('sysUser', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        account: { type: Sequelize.STRING, unique: true },
        password: { type: Sequelize.TEXT, allowNull: false }
    });

    return SysUser;
}

module.exports = define;
