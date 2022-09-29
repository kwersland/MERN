const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least {MINLENGTH} characters long"] 
    },
    price : {
        type : Number, //covers integer and double as well
        required : [true, "{PATH} is required"],
        min : [.01, "{PATH} cannot be less than {MIN}"],
    },
    description : {
        type : String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least {MINLENGTH} characters long"]
    }
}, {timestamps: true});


module.exports.Product = mongoose.model('Product', ProductSchema);