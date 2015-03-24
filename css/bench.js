var fs = require('fs')
var css = require('css');
var cssom = require('cssom');
var postcss = require('postcss');
var toFast = require('to-fast-properties')
css.ws = require('css-whitespace');

// css.parse = toFast(css.parse)
// cssom.parse = toFast(cssom.parse)
// postcss.parse = toFast(postcss.parse)

var input = fs.readFileSync('./fixtures/play/gack/bundle.gack.styl', 'utf-8');

var ast = css.ws.compile(require('./parsed-css.js'))

console.log(fs.writeFileSync('compiled-css.css', ast))

// suite('compare css vs. cssom vs. postcss', function() {
//   bench('css', function() {
//     var ast = css.parse(input)
//   })
//   bench('cssom', function() {
//     var ast = cssom.parse(input)
//   })
//   bench('postcss', function() {
//     var ast = postcss.parse(input)
//   })
// })
