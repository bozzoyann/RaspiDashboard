var config = require("../../configuration");
var http = require("http");

module.exports = (function() {
    
    function getAll(callback) {
        getAllChuckNorrisFacts(function(facts) {
            callback(facts);
        });
    }

    function getAllChuckNorrisFacts(callback) {
        http.get({
            hostname: config.services.fun_flux.host,
            port: config.services.fun_flux.port,
            path: "/api/chuck_norris/facts",
        }, function(result) {
            var body = "";
            result.on("data", function(data) {
                body += data;
            });
            result.on("end", function() {
                callback(body);
            });
        });
    }
    
    return {
        getAll: function(callback) {
            getAll(function(funFlux) {
                callback(funFlux);
            });
        }
    };

})();