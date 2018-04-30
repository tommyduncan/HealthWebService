var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const AppInfo = require('../models').AppInfo;
const CustomData = require('../models').CustomData;

router.get('/:dateString', jwt({ secret: 'HealthCare' }), function (req, res, next) {
  var payload = req.user;

  AppInfo.findOne({ where: { Clinic_No: payload.Clinic_No, Record_Date: req.params.dateString } }).then(appInfo => {
    res.json(appInfo);
  });
});

router.post('/', jwt({ secret: 'HealthCare' }), function (req, res, next) {
  var payload = req.user;

  CustomData.findOne({ where: { Clinic_No: payload.Clinic_No } }).then(customData => {
    AppInfo.create({
      Clinic_No: payload.Clinic_No,
      Clinic_Name: customData.Clinic_Name,
      Record_Date: req.body.textDate,
      movement: req.body.hasSport,
      Movement_Time: req.body.movementTime,
      Day_Record: req.body.remark
    }).then(appInfo => {
      res.json({ error: false, data: appInfo, errorMsg: null });
    }).catch(error => {
      res.status(500).json({ error: true, data: null, errorMsg: error });
    });
  });
});

router.put('/', jwt({ secret: 'HealthCare' }), function (req, res, next) {
  var payload = req.user;

  AppInfo.update(
    {
      movement: req.body.hasSport,
      Movement_Time: req.body.movementTime,
      Day_Record: req.body.remark
    },
    { where: { Clinic_No: payload.Clinic_No, Record_Date: req.body.textDate } }).then(appInfo => {
      res.json({ error: false, data: appInfo, errorMsg: null });
    }).catch(error => {
      res.status(500).json({ error: true, data: null, errorMsg: error });
    });
});

module.exports = router;
