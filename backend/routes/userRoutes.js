const express = require('express');
const { Resgistr } = require('../controller/userController');
const Router = express.Router();

Router.route('/register').post(Resgistr)

module.exports = Router;