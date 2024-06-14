const express = require('express');
const UserController = require('../controllers/UserController');
const UserRouter = express.Router();

UserRouter.post('/signUp', UserController.createUser);
UserRouter.get('/getUser', UserController.getUser);
UserRouter.post('/signIn', UserController.authentication);

module.exports = UserRouter;