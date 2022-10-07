const { model } = require("mongoose");

class AuthController {
    index(req, res) {
        res.render('auths');
    }
}

module.exports = new AuthController;

const AuthController = require('./AuthController'); 