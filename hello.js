var http=require('http'); //how are require modules
//ejemplo de no-blocking config
http.createServer(function(request,response){
	response.writeHead(200); //status code in header
	response.write("Hello, this is dog."); //response body
	response.end(); //close the connection


}).listen(8080); //listen for connections on this port

console.log('Listening on port 8080...');