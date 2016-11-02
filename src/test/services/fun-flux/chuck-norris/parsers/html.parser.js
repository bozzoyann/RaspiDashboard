var assert = require("assert");
var path = require("path");
var htmlParser = require("../../../../../main/services/fun-flux/chuck-norris/parsers/html.parser");
var fs = require("fs");

describe("chuck-norris-facts.parser.js", function() {
    describe("#parse()", function() {
        it("should return a list of facts", function(done) {
            // ARRANGE
            var html = fs.readFileSync(path.join(__dirname, "./facts.html")).toString();
            var factsExpected = require("./facts-result");
            // ACT
            var facts = htmlParser.parse(html);
            // ASSERT
            assert.deepEqual(facts, factsExpected);
            done();
        });
    });
});