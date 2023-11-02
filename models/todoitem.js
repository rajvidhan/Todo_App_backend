const mongoose = require("mongoose");



const todoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    text:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("ToDo",todoSchema)