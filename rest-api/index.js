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

//  Made connection with mongo
mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
    console.log("successfully connected to mongodb") ;

}).catch((err)=>{
    console.log(err) ;
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
     await product.create(req.body) ;
    res.status(successStatus).json({
        success:true,
        product
    })
 })

//   API to get all product

app.get("/api/v1/product/get",async (req,res)=>{
    const getProduct = await product.find() ;
   res.status(successStatus).json({
       success:true,
       getProduct
   })
})

//  Update API to modify passed product
app.put("/api/v1/product/:id",async (req,res)=>{
    let updatedProduct = await product.findById(req.params.id) ;
    updatedProduct = await product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:true,
        runValidators:true
    }) ;

    res.status(successStatus).json({
        success:true,
        updatedProduct
    })
})