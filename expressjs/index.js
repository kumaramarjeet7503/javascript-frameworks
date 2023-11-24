const express = require("express") ;
const app = express() ;
const port = 4000 ;

//  Creating server with express

app.listen(port,()=>{
    console.log(`server is working on port: ${port}`) ;
}) ;


//  Get page from request
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>") ;
}) ;

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>") ;
}) ;

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>") ;
}) ;
