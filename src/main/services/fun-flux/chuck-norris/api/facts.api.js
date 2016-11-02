var factsService = require("../services/facts.service");

module.exports = function(app) {
    app.get("/api/chuck_norris/facts", function(request, response) {
        console.log("Receive a request");
        factsService.getAll(function(facts) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(facts));
            response.end();
        });
    });
};