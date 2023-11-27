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

//  saving can be done via .save function
const adder = async ()=>{
    const ss = new client({
        name:"hem",
        section:"10",
        course:2,
        active:true
    })
    
    await ss.save() ;
}

//  as well as can be created via create function
const createStudent = async()=>{
    const newStudent = await client.create({
        name:"Ravind",
        section:"43",
        course:1,
        active:true
    })
}

const findStudent = async() =>{
    const findStudent = await client.find() ;
    console.log(findStudent);
}
findStudent();
// createStudent() ;
