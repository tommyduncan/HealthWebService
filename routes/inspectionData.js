var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const Op = require('../models').Sequelize.Op;
const InspectionData = require('../models').InspectionData;

router.get('/', jwt({ secret: 'HealthCare' }), function (req, res, next) {
    var payload = req.user;

    InspectionData.findAll({ where: { Clinic_No: payload.Clinic_No } }).then(inspectionDataList => {
        if(inspectionDataList.length > 0)
            res.json(inspectionDataList[inspectionDataList.length - 1]);
        else
            res.json([]);
    });
});

router.get('/:startDate/:endDate', jwt({ secret: 'HealthCare' }), function (req, res, next) {
    var payload = req.user;

    InspectionData.findAll({ where: { Clinic_No: payload.Clinic_No, InspectionDay: { [Op.gte]: req.params.startDate, [Op.lte]: req.params.endDate } } }).then(inspectionDataList => {
        res.json(inspectionDataList);
    });
});

module.exports = router;