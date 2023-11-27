const express = require("express") ;
const app = express() ;
const port = 4000 ;
const path = require("path") ;
const mongoose = require("mongoose");
const bodyParser = require("body-parser") ;

app.listen(port,()=>{
    console.log("Server started at http:localhost:"+port)
})

// const produtSchema = new mongoose.Schema({
//     name:String,
//     description : String,
//     price : Number
// })

// const product = new mongoose.model("Product",produtSchema)
