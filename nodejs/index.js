const a = {
    average : (a,b) => {
        console.log((a+b)/2) ;
    },
        percent : (a,b) => {
            console.log((a/b)*100) ;
        },
        };

        //  Read file async call this will be done asyncronously
        const fs = require("fs") ;

        fs.readFile("./sample.txt","utf-8",(err,data)=>{
            if(err){
                return err ;
            }
            console.log(data);
        });


        //  The file will be syncronously execute
        fs.readFileSync("./sample.txt","utf-8") ;

module.exports = a ;