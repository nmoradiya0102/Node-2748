let http = require('http');
http.createServer(function(req,res){
    res.write('hello browser..');
    res.end();
}).listen(8080);


// file server
/*var http = require("http")
http.createServer((req , res)=>{
}).listen(8080,()=>console.log("server is running...")) */