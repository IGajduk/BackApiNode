let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    title:{
        type: String,

    },
    price:{
        type: Number,

    },
    about_all:{
        type: String,

    },
    about_short:{
            type: String,

    },
    colors: [],
    photos: [],
    quantity:{
        type: Number,

    },
    date:{
        type: Date,
        default: new Date()
    },
    gender:{
        type: String,

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

    },
    sale:{
        type: Boolean,

    }
});

module.exports = mongoose.model('Product', ProductSchema);