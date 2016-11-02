var funFluxService = require("../services/fun-flux.service");

module.exports = function(app) {

    app.get("/api/fun_flux", function(request, response) {
        console.log("Receive a request")
        funFluxService.getAll(function(funFlux) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(funFlux);
            response.end();
        });
    });
    
};