var express = require("express");
var app = express();

app.get("/api/test", function(request, response) {
    console.log("Receive a request");
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify({
        test: "test"
    }));
    response.end();
});

console.log("Server listening at port 8081");
app.listen(8081);
