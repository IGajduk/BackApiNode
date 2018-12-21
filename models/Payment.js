let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PaymentSchema = new Schema({
    date:{
        type: Date,
        default: new Date()
    },
    order:{
        type: Schema.ObjectId,
        ref: 'Order'
    },
    user:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    sum: String
});

module.exports = mongoose.model('Payment', PaymentSchema);