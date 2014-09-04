var assert = require("assert");
var fs = require("fs");
var path = require('path');
var kiss = require("../kiss-xml");

var validXml    = fs.readFileSync(path.resolve(__dirname, "valid.xml")).toString();
var invalidXml  = fs.readFileSync(path.resolve(__dirname, "invalid.xml")).toString();
var validJson   = fs.readFileSync(path.resolve(__dirname, "valid.json")).toString();
var invalidJson = fs.readFileSync(path.resolve(__dirname, "invalid.json")).toString();


describe('Parse', function(){
  describe('parsing xml to json', function(){
    it('should success', function(done){
      kiss.parse(validXml, function(err, json) {
        // console.log(JSON.stringify(JSON.parse(validJson)))
        if (err) throw err;
        assert.equal(JSON.stringify(json), JSON.stringify(JSON.parse(validJson)))
        done();
      });
    });
  });
});

describe('Serialize', function(){
  describe('serializing json to xml', function(){
    it('should success', function(){
      kiss.serialize(validJson);
    });
  });
});