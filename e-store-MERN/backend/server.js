const app = require("./app") ;
const connectDatabase = require("./config/db")
//  Create dotenv 
const dotEnv = require("dotenv") ;

//  Config dot env module
dotEnv.config({path:"backend/config/config.env"}) ;
//  config database module
connectDatabase() ;


process.on("uncaughtException",(err)=>{
    console.log("Uncaught exception") ;
    server.close(()=>{
        process.exit(1)
    })
})

app.listen(process.env.PORT,()=>{
    console.log("Server started on : http://localhost:"+process.env.PORT) ;
}) ;

//  Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log("error:")
    server.close(()=>{
        process.exit(1) ;
    })
})