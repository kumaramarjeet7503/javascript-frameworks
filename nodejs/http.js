const http = require("http") 
const { request } = require("https")


const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.end("working") ;
}) ;

server.listen(4040,"localhost",()=>{
    console.log("server is working on http://localhost:4040") ;
})


