let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    about: {
        all:{
            type: String,
            required: true
        },
        short:{
            type: String,
            required: true
        }
    },
    colors: [],
    photos: [],
    quantity:{
        type: Number,
        required: true
    },
    producent:{
        type: Schema.ObjectId,
        ref: 'Producent'
    },
    date:{
        type: Date,
        default: new Date()
    },
    gender:{
        type: String,
        required: true
    },
    category:{
        type: Schema.ObjectId,
        ref: 'Category'
    },
    producer:{
        type: Schema.ObjectId,
        ref: 'Producer'
    },
    show:{
        type: Boolean,
        required: true
    },
    sale:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);