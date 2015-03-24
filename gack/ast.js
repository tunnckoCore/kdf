var fs = require('fs')
var css = require('css');
var cssp = require('cssp');
var cssom = require('cssom');
var postcss = require('postcss');
var gonzales = require('gonzales-ast');
var toFast = require('to-fast-properties')
var whitespace = require('css-whitespace');

var parser = gonzales;

var input = fs.readFileSync('./fixtures/root.gack.css', 'utf-8');
var ast = parser.parse(input)


fs.writeFileSync('ast-gonzales.json', JSON.stringify(ast,0,2))
