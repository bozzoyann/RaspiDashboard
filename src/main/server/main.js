var config = require("../configuration");
var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "public")));
require("./api/fun-flux.api")(app);
console.log("Server listening at port " + config.server.port);
app.listen(config.server.port);