const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'sdfvbnmertyu8541dfg';

const User = require('../model/user.model');

router.post('/', async(req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(http_codes.BAD_REQUEST).json({
            error: 'email and password are required',
            message: 'Enter all required field'
        });
    }
    try {
        const registered_user = await User.findOne({ email });
        if(!registered_user) {
            return res.status(http_codes.UNAUTHORIZED).json({
                error: 'Invalid Email'
            });
        }

        const passwordMatch = await bcrypt.compare(password, registered_user?.password);
        if(!passwordMatch) {
            return res.status(http_codes.UNAUTHORIZED).json({
                error: 'Invalid credentials',
                message: 'Username or password is incorrect'
            });
        }

        const token = await jwt.sign({ email, userId: registered_user._id }, secretKey)
        res.status(http_codes.OK).json({
            message: 'Successfully logged in',
            email: email,
            id: registered_user._id,
            token
        });
    } catch(err) {
        console.error('Error loggin: ' + err);
        res.status(http_codes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal server error',
            message: err.message
        });
    }
});

module.exports = router;