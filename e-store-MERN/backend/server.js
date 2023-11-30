const app = require("./app") ;
const connectDatabase = require("./config/db")
//  Create dotenv 
const dotEnv = require("dotenv") ;

//  Config dot env module
dotEnv.config({path:"backend/config/config.env"}) ;
//  config database module
connectDatabase() ;


app.listen(process.env.PORT,()=>{
    console.log("Server started on : http://localhost:"+process.env.PORT) ;
})