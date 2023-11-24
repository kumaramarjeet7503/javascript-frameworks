const express = require("express") ;
const app = express() ;
const port = 4000 ;
const path = require("path") ;
//  Creating server with express

app.listen(port,()=>{
    console.log(`server is working on port: ${port}`) ;
}) ;


//  Get page from request via GET METHOD
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>") ;
}) ;

//  Send page to the client  via send function
app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html")) ;    
})

//  Post data recieved from form page
app.post("/form",(req,res)=>{
        
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>") ;
}) ;

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>") ;
}) ;
