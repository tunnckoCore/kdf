
var fs = require('fs')
var util = require('util');
var parser = require('postcss');
parser.whitespace = require('css-whitespace');

function readFixture(whitespace) {
  var fmt = './fixtures/css/%s-flow.css'
  var fp = whitespace ? util.format(fmt, 'stylus') : util.format(fmt, 'css')
  var raw = fs.readFileSync(fp, 'utf-8');

  return whitespace ? parser.whitespace(raw) : raw;
}

// fs.writeFileSync('./fixtures/css/css-flow.css', readFixture(true))

var cache = {};
// var input = readFixture(true)
var input = "@charset 'utf-8';\n@import 'settings.css';\n@custom-selector :--any-link :link, :visited;\n@custom-selector --heading h1, h2, h3, h4, h5, h6;"
var ast = parser.parse(input)
// console.log(JSON.stringify(ast,0,2))
// fs.writeFileSync('./fixtures/css/ast.json', JSON.stringify(ast,0,2))

/**
 * CSS-based flow
 *
 * @todo handle @import, @charset etc, now just discard them
 * @api public
 */
// ast.forEach(function(obj) {
//   if (obj.type === 'rule') {
//     var key = obj.selectors[0];
//     var declarations = obj.declarations
//     var i = 0;

//     var item = cache[key] = {};

//     while (i < declarations.length) {
//       var decl = declarations[i++];
//       item[decl.property] = decl.value
//     }
//   }
// })

// var json = JSON.stringify(cache,0,2);
// console.log(json)
// generate json from ast
// fs.writeFileSync('./fixtures/css/fixture.json', json);
