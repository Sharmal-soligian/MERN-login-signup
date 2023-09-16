const express = require('express');
const router = express.Router();

const login = require('../controllers/login.controller');
const signup = require('../controllers/signup.controller');

router.use('/login', login);
router.use('/signup', signup);

module.exports = router;