/*
Entry File
*/

// Dependencies
var http=require('http');
var url = require('url');

//Create a server

var server= http.createServer(function(req,res){

	//get url
	var parsedUrl=url.parse(req.url,true);

	//get the path
	var path=parsedUrl.pathname;
	var trimmedPath=path.replace(/^\/+|\/+$/g,'');

	//get http method
	var method=req.method.toLowerCase();

	// get query string as an object 
	var queryStringObject=parsedUrl.query;

	//get headers
	var headers=req.headers;

	//send response 
	res.end("hello world\n");
	console.log(headers)
});

//listen port 3000

server.listen(3000,function(){
	console.log("server is listening  port 3000")
	
});
