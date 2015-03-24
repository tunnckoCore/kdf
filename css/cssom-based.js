var fs = require('fs')
// var css = require('css');
var map = require('object.map');
var forOwn = require('for-own');
var util = require('util');
var cssom = require('cssom');
// var postcss = require('postcss');
var filter = require('filter-object');
cssom.whitespace = require('css-whitespace');
var extend = require('extend-shallow');


function readFixture(whitespace) {
  var fmt = './fixtures/cssom/%s-flow.css'
  var fp = whitespace ? util.format(fmt, 'stylus') : util.format(fmt, 'css')
  var raw = fs.readFileSync(fp, 'utf-8');

  return whitespace ? cssom.whitespace(raw) : raw;
}

var cache = {};
var input = readFixture(true)
var ast = cssom.parse(input).cssRules

// fs.writeFileSync('./fixtures/cssom/ast.json', JSON.stringify(ast,0,2))
// generate css-flow, from stylus-flow
// fs.writeFileSync('./fixtures/cssom/css-flow1.css', input)

/**
 * CSSOM-based flow
 *
 * @todo handle @import, @charset etc, now just discard them
 * @api public
 */
ast.forEach(function(obj) {
  if (obj.selectorText) {
    var key = obj.selectorText;
    var style = obj.style
    var i = 0;

    var val = cache[key] = {};

    while (i < style.length) {
      var name = style[i++];
      val[name] = style[name]
    }
  }
})

var json = JSON.stringify(cache,0,2);

// console.log(json)
// generate json from ast
// fs.writeFileSync('./fixtures/cssom/fixture.json', json);


// var variables = cache[':root']

cache = map(cache, function(decl) {
  forOwn(decl, function(value, key) {
    var orig = value;
    var mixin = ':root .' + key
    if (cache.hasOwnProperty(mixin)) {
      var params = value.replace(/\s*/g,'').split(',');

      var copy = JSON.stringify(cache[mixin],0,2);

      params.forEach(function(arg, i) {
        copy = copy.replace('$'+i, arg === 'default' ? '$-' : arg)
      })
      copy = JSON.parse(copy)

      decl = extend(copy, decl)
      decl = map(decl, function(v, k, i) {
        var startRe = /^(\$.*\?\s*)/;
        var endRe = /(\s*\?.*$)/;
        return startRe.test(v)
          ? v.replace(startRe, '')
          : v.replace(endRe, '')
      });
    }
  });
  return decl;
})

// console.log(filter(cache, '!:root*'))

cache = filter(cache, '!:root*');

// final valid css, from cache
var _css = JSON.stringify(cache, 0, 2);
// fs.writeFileSync('./fixtures/cssom/bundle.css', _css);
