var sax = require('sax'),
    xml = require('./xml');

module.exports = function parse(xmlStr, options, callback) {
    var parser,
        target = new xml.NodeSet(),
        pointer = target,
        firstError = null;

    if (typeof options === 'function') {
        callback = options;
        options = {};
    }

    options.trim = true;
    parser = sax.parser(options.strict !== false, options);

    parser.onopentag = function(node) {
        var tag = new xml.Tag(node.name, node.attributes, pointer);
        pointer.append(tag);
        pointer = tag;
    };

    parser.onclosetag = function(node) {
        pointer = pointer.parent;
    };

    parser.oncomment = function(comment) {
        pointer.append(new xml.Comment(comment));
    };

    parser.onopencdata = function() {
        pointer.append(new xml.CData());
    };

    parser.oncdata = function(chunk) {
        pointer.children[pointer.children.length - 1].push(chunk);
    };

    parser.onclosecdata = function() {
    };

    parser.ontext = function(text) {
        pointer.append(text);
    };

    parser.onerror = function(error) {
        parser.resume();
    };

    parser.onend = function() {
        callback(firstError, firstError ? null : target.toJSON());
    };

    parser.write(xmlStr).close();

};
