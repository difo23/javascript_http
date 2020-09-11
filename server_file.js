var http = require('http');
var path = require('path');

var pages = [	{route: '', output: 'Woohoo!'},
				{route: 'about', output: 'A simple routing with Node example'},
				{route: 'another_page', output: function() {return 'Here\'s'+this.route;}},
			];


http.createServer(function (request, response) {

//en esta parte uso basename y decodeURI para extraer el nombre de la ruta deseada
		var lookup=path.basename(decodeURI(request.url));

	
		pages.forEach(function(page) {
					if (page.route === lookup) {
					response.writeHead(200, {'Content-Type': 'text/html'});
					// como puedes ver hay output que son simples string que devuelven
					// pero hay un output el ultimo que es una funcion
					// por eso pregunto que es el output  es igual a una funcion(true) 
					//o a un string(false)
					response.end(typeof page.output === 'function'? page.output() : page.output);
					}
				});

		//si la ruta no coincide con las que tengo por defecto devuelvo paguina no encontrada 
		// esto para no mantener un look infinito.

	if (!response.finished) {
				response.writeHead(404);
				response.end('Page Not Found!');
	}

}).listen(8080);
