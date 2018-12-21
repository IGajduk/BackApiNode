let passport = require('passport');
let User = require('../models/User');
let LocalStrategies= require('./PassportLocalStrategy');

passport.serializeUser(function (user, done) {
    done(null, user._id);
});
passport.deserializeUser(async function (id, done) {
    try {
        let user = await User.findById(id);
        done(null, user);
    }catch (e) {
        done(e);
    }
});

passport.use('local.login', LocalStrategies.LogIn);
passport.use('local.register', LocalStrategies.SignUp);