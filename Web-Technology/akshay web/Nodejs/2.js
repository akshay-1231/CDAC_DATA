//custom server creation


var http=require('http');
//console.log(http);

//to create server by node js requre callback function
//store http in server 
//req--incoming data to nodejs from application
//res==outgoing data to application
const server=http.createServer(function(req,res){
     console.log(typeof req,typeof res);
     res.end("hello world");
    });
//to listen server
server.listen(7000);
//in browesr localhost:9000 -->entre-->on console we get--> object object-->server created




