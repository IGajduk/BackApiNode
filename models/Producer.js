let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProducerSchema = new Schema({
    title: String,
    about_all: String,
    about_short: String,
    photo: String,
    country: String
});

module.exports = mongoose.model('Producer', ProducerSchema);