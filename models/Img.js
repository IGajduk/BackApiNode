let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ImgSchema = new Schema({
    title: String,
    refId: String,
    position: Number,
    urlOfImg: String,
    date:{
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Img', ImgSchema);