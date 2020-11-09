const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type:String,
        maxlength: 50,
        required: true
    },
    des: {
        type:String,
        maxlength: 1024
    },
}, { timestamps: true});

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };