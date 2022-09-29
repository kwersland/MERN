const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    project : {
        type : String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least {MINLENGTH} characters long"] 
    },
    dueDate : {
        type : Date,
        required : [true, "{PATH} is required"]
    },
    status : {
        type : String,
        required : [true, "{PATH} is required"]
    }
}, {timestamps: true});


module.exports.Project = mongoose.model('Project', ProjectSchema);