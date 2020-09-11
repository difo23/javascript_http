
var http = require('http');
var url = require('url');
//ejemplo 1
//var pages = [
               //{route: '/', output: 'Woohoo!'},
               	//{route: '/about/this', output: 'Multilevel routing with Node'},
				//{route: '/about/node', output: 'Evented I/O for V8 JavaScript.'},
				//{route: '/another page', output: function () {return 'Here\'s '+ this.route; }}
//];

//ejemplor 2:
//var pages = [
		//{route: 'about', childRoutes: [
		//{route: 'node', output: 'Evented I/O for V8 Javascript'},
		//{route: 'this', output: 'Complex Multilevel Example'}
		//]},
//];

//ejemplo 3
var pages = [
				{id: '1', route: '', output: 'Woohoo!'},
				{id: '2', route: 'about', output: 'A simple routing with Node	example'},
				{id: '3', route: 'another page', output: function () {	return 'Here\'s ' +	this.route; }}
			];

http.createServer(function (request, response) {
			//With the added id properties, we can access our object data by, for instance,
			// ejemplo: localhost:8080?id=2.

			var id = url.parse(decodeURI(request.url), true).query.id;

			if (id) {
						pages.forEach(function (page) {
								if (page.id === id) {
									response.writeHead(200, {'Content-Type': 'text/html'});
									response.end(typeof page.output === 'function'? page.output() : page.output);
									}
						});
					}

			if (!response.finished) {
										response.writeHead(404);
										response.end('Page Not Found');
				}

}).listen(8080);
