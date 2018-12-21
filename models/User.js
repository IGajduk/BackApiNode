let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ROLES = require('../config/roles');

let UserSchema = new Schema({
    firstName:{
        type: String
    },
    surname:{
        type: String
    },
    password:{
        type: String
    },
    phone:{
        type: Number
    },
    email:{
        type: String
    },
    adress:{
        type: String
    },
    roles:{
        type: Array,
        default: [ROLES.GLOBAL_ROLES.USER_ROLE]
    }
});

module.exports = mongoose.model('User', UserSchema);