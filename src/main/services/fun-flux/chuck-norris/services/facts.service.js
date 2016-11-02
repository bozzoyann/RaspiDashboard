var http = require("http");
var htmlParser = require("../parsers/html.parser");

module.exports = (function() {

    function getAll(callback) {
        http.get({
            hostname: "chucknorrisfacts.fr",
            path: "/facts"
        }, function(result) {
            var html = "";
            result.on("data", function(data) {
                html += data;
            });
            result.on("end", function() {
                var facts = htmlParser.parse(html);
                callback(facts);
            });
        });
    }

    return {
        getAll: function(callback) {
            getAll(callback);
        }
    };
})();
