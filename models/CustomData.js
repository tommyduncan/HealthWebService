const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const CustomData = sequelize.define('CustomData', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false },
        Clinic_Name: { type: DataTypes.STRING(50), allowNull: false },
        Class_Name: { type: DataTypes.STRING(10), allowNull: false },
        Gender: { type: DataTypes.CHAR(1), allowNull: false },
        Age: { type: Sequelize.INTEGER },
        Religion: { type: Sequelize.STRING(20) },
        Education: { type: DataTypes.CHAR(1) },
        MaritalStatus: { type: Sequelize.STRING(10) },
        JobStatus: { type: DataTypes.CHAR(1) },
        ResidentSituation: { type: DataTypes.CHAR(1) },
        SmokingHabits: { type: DataTypes.CHAR(1) },
        SportsHabits: { type: DataTypes.CHAR(1) },
        DiabetesEducation: { type: DataTypes.CHAR(1) },
        BloodGlucoseMachine: { type: DataTypes.CHAR(1) },
        MedicationHabits: { type: DataTypes.CHAR(1) },
        MedicalHistory: { type: Sequelize.STRING(25) },
        Remark: { type: DataTypes.STRING(300) },
        BeginTime: { type: DataTypes.CHAR(8), allowNull: false },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.STRING(20), allowNull: false }
    });

    return CustomData;
}

module.exports = define;