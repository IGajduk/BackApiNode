let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ImageSchema = new Schema({
    title: String,
    product:{
        type: Schema.ObjectId,
        ref: 'Product'
    },
    position: Number,
    urlOfImg: String
});

module.exports = mongoose.model('Image', ImageSchema);