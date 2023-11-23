const a = {
    average : (a,b) => {
        console.log((a+b)/2) ;
    },
        percent : (a,b) => {
            console.log((a/b)*100) ;
        },
        };

        //  Read file 
        const fs = require("fs") ;

        fs.readFile("./sample.txt",(err,data)=>{
            if(err){
                return err ;
            }
            console.log(data);
        });

module.exports = a ;