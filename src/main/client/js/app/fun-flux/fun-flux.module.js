module.exports = angular.module("fun-flux.module", [])
                        .controller("fun-flux.controller", require("./controllers/fun-flux.controller"))
                        .component("funflux", {
                            controller: "fun-flux.controller",
                            templateUrl: "templates/fun-flux/fun-flux.html" 
                        });