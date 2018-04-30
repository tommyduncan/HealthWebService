var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const InspectionData = require('../models').InspectionData;

router.get('/', jwt( {secret: 'HealthCare'} ), function (req, res, next) {
    var payload = req.user;

    InspectionData.findAll({where: {Clinic_No: payload.Clinic_No}}).then(inspectionDataList => {
        res.json(inspectionDataList[inspectionDataList.length - 1]);
    });
});

module.exports = router;