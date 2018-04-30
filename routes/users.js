var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const User = require('../models').AppUser;

/* User register */
router.post('/register', [
  check('username').isString().not().isEmpty(),
  check('password').isString().not().isEmpty()
], (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send('Invalid request body!');
  }

  User.findOne({ where: { App_Account: req.body.username } }).then(user => {
    if (user)
      res.send('Username has existed.');
    else {
      User.create({ App_Account: req.body.username, App_Password: req.body.password });

      res.send('Register success.');
    }
  });
});

/* User login */
router.post('/login', [
  check('username').isString().not().isEmpty(),
  check('password').isString().not().isEmpty()
], (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send('Invalid request body!');
  }

  User.findOne({ where: { App_Account: req.body.username } }).then(user => {
    if (!user)
      res.status(401).json({ error: true, data: null, errorMsg: 'nonexistent user' });
    else {
      var hashedPassword = crypto.createHmac('sha256', 'HealthManagementSystem').update(req.body.password).digest('hex');

      if (user.App_Password == hashedPassword) {
        var jwt = generateJWT(user.Clinic_No);

        res.setHeader('Authorization', jwt);
        res.json({ error: false, data: 'login success', errorMsg: null });
      } else
        res.status(401).json({ error: true, data: null, errorMsg: 'error password' });
    }
  });
});

function generateJWT(Clinic_No){
  return jwt.sign({ Clinic_No: Clinic_No }, 'HealthCare');
}

module.exports = router;
