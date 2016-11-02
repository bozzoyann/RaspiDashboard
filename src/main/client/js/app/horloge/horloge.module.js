angular.module("horloge.module", [])
       .controller("horloge.controller", require("./controllers/horloge.controller")) 
       .component("horloge", {
           controller: "horloge.controller",
           templateUrl: "templates/horloge/horloge.html"
       });