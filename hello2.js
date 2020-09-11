var http = require('http');

http.createServer(function(request, response) {

	response.writeHead(200);
	response.write("Dog is running.");

setTimeout(function(){/*Represent long running process*/
	response.write("Dog is done.");
	response.end();
 }, 5000); //5000ms = 5second

}).listen(8080);