const express = require("express") ;
const app = express() ;
const port = 4000 ;
const path = require("path") ;
const mongoose = require("mongoose");
const bodyParser = require("body-parser") ;
const successStatus = 200 ;


//  Enable Body parser to pass response as json
app.use(bodyParser.urlencoded({extended:false})) 
app.use(express.json())

//  Create port on definded server
app.listen(port,()=>{
    console.log("Server started at http:localhost:"+port)
})

//  Create product schema and model, mongo db 
const produtSchema = new mongoose.Schema({
    name:String,
    description : String,
    price : Number
})
const product = new mongoose.model("Product",produtSchema)

//  API for creating new product
 app.post("/api/v1/product/new",async (req,res)=>{
    const product = await Product.create(req.body) ;
    res.status(successStatus).json({
        success:true,
        product
    })
 })