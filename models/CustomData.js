const Sequelize = require('sequelize');

function define(sequelize, DataTypes) {
    const CustomData = sequelize.define('CustomData', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Clinic_No: { type: Sequelize.STRING, unique: true, allowNull: false },
        Clinic_Name: { type: Sequelize.TEXT, allowNull: false },
        Class_Name: { type: Sequelize.TEXT, allowNull: false },
        Gender: { type: DataTypes.CHAR(1), allowNull: false },
        Age: { type: Sequelize.INTEGER },
        Religion: { type: Sequelize.TEXT },
        Education: { type: DataTypes.CHAR(1) },
        MaritalStatus: { type: Sequelize.TEXT },
        JobStatus: { type: DataTypes.CHAR(1) },
        ResidentSituation: { type: DataTypes.CHAR(1) },
        SmokingHabits: { type: DataTypes.CHAR(1) },
        SportsHabits: { type: DataTypes.CHAR(1) },
        DrinkHabits: { type: DataTypes.CHAR(1) },
        DiabetesEducation: { type: DataTypes.CHAR(1) },
        BloodGlucoseMachine: { type: DataTypes.CHAR(1) },
        MedicationHabits: { type: DataTypes.CHAR(1) },
        MedicalHistory: { type: Sequelize.TEXT },
        Remark: { type: Sequelize.TEXT },
        BeginTime: { type: DataTypes.CHAR(8), allowNull: false },
        ModifiedDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        ModifiedBy: { type: Sequelize.TEXT, allowNull: false }
    });

    return CustomData;
}

module.exports = define;