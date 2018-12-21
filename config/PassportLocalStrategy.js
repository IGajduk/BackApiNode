let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User');
let strategies = {};

strategies.LogIn = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async function (req, email, password, done) {
        try {
            let principal = await User.findOne({
                email,
                password
            });
            if (principal) {
                return done(null, principal);
            } else {
                return done(false, null);
            }
        } catch (e) {
            return done(e);
        }
    }
);

strategies.SignUp = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, email, password, done) {
        try {
            let alreadyExists = await User.findOne({
                email
            });
            console.log(2, req.body);
            if (alreadyExists) {
                return done(false, null);
                console.log(3, req.body);
            } else {
                console.log(1, req.body);
               let user = await User.create(req.body);
               return done(null, user);
            }
        } catch (e) {
            return done(e);
        }
    }
);


module.exports = strategies;