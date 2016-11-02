var cheerio = require("cheerio");
var funFluxModelBuilder = require("../../common/models/fun-flux.model")();

module.exports = (function() {

    var SOURCE = "chuck-norris-facts";

    function parse(html) {
        var facts = [];
        var $ = cheerio.load(html);
        $("div.factbody").each(function(i, element) {
            var div = $(this).get(0);
            var texts = searchTextElements(div);
            var fact = buildFact(texts);
            facts.push(fact);
        });
        return facts;
    }

    function searchTextElements(div) {
        var children = div.children;
        return children.filter(textTypeFilter)
                            .filter(textContentFilter);
    }

    function textTypeFilter(element) {
        return element.type === "text";
    }

    function textContentFilter(element) {
        return element.data.search("[a-zA-Z]") !== -1 ;
    }

    function buildFact(texts) {
        funFluxModelBuilder.addSource(SOURCE);
        var content = "";
        for (var i = 0; i < texts.length; i++) {
            content += texts[i].data.trim();
            content += i !== texts.length - 1 ? "\n" : "";
        }
        funFluxModelBuilder.addContent(content);
        return funFluxModelBuilder.build();
    }

    return {
        parse: function(html) {
            return parse(html);
        }
    };
})();
