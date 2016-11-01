var http = require("http");
var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", function(request, response) {
    console.log("Receive a request");
    http.get({
        hostname: "localhost",
        port: 8081,
        path: "/api/test",
        agent: false
    }, function(result) {
        var body = "";
        result.on("data", function(data) {
            body += data
        });
        result.on("end", function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(body);
            response.end();
        });
    });
});
console.log("Server listening at port 8080");
app.listen(8080);