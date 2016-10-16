console.log("coucou le monde, je suis node.js");

var http=require('http');
var port=8080;


var server= http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html"});
	res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
	res.end("<h1>Moi aussi</h1>");
});

server.listen(port);
console.log('NodeJS server started listening port '+port);