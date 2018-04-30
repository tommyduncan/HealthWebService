var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const CustomData = require('../models').CustomData;

router.get('/', jwt( {secret: 'HealthCare'} ), function (req, res, next) {
    var payload = req.user;

    CustomData.findOne({where: {Clinic_No: req.user.Clinic_No}}).then(customData => {
        res.json(customData);
    });
});

module.exports = router;