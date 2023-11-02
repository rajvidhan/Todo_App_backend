const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const todoroutes = require("./Routes/Todoroute")
const userrouter = require("./Routes/userroute")
const  bodyParser = require('body-parser')
const port = 3000 || 3001;
require('dotenv').config();
app.use(express.json());
app.use(cors());
// middleware to use parse the req ofbody
app.use(bodyParser.json());
const URL = "mongodb://127.0.0.1:27017/TodoApp";



// connect the database
mongoose.connect(URL,
{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{
    console.log("mongodb is connected bhai ...")
})
.catch((err)=>{
    console.log(err);
})

app.use(todoroutes);
app.use("/api/auth",userrouter);



app.listen(port,()=>{
    console.log("the server is running well raj");
});

