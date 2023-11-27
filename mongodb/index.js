const express = require("express") ;
const app = express() ;
const port = 4000 ;
const path = require("path") ;

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
    console.log("Connected to mongodb") ;
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name:{type:String},
    section:String,
    course:Number,
    active : Boolean
})

const client = new  mongoose.model("Student",student) ;

const ss = new client({
    name:"hem",
    section:"10",
    course:2,
    active:true
})

// await ss.save() ;