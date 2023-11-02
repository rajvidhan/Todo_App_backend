const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
    },
    email:{
        type:String,
        required:true,
        max:20,
    },
    password:{
        type:String,
        required:true,
        max:8,
    }
});

module.exports = mongoose.model("User",userSchema);
