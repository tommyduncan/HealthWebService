var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models').AppUser;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

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
      User.create({App_Account: req.body.username, App_Password: req.body.password});

      res.send('Register success.');
    }
  });
});

module.exports = router;
