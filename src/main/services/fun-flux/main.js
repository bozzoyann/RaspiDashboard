var config = require("../../configuration");
var express = require("express");
var app = express();
require("./chuck-norris/api/facts.api")(app);
console.log("Services 'fun-flux' started at port " + config.services.fun_flux.port);
app.listen(config.services.fun_flux.port);