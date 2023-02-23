const express = require('express');
const { Resgistr, LoginUser } = require('../controller/userController');
const Router = express.Router();

Router.route('/register').post(Resgistr)
Router.route('/loginUser').get(LoginUser)

module.exports = Router;