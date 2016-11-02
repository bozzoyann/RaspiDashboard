function Builder() {
    var _source = "";
    var _content = "";
    return {
        addSource: function(source) {
            _source = source;
            return this;
        },
        addContent: function(content) {
            _content = content;
            return this;
        },
        build: function() {
            return {
                source: _source,
                content: _content
            };
        }
    };
}

module.exports = Builder;