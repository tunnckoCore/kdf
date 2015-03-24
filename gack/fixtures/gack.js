
var fs = require('fs')
var path = require('path')
var parser = require('css');
var ws = parser.whitespace = require('css-whitespace');

var fp = path.join(__dirname, './mixins.gack.styl');
var input = fs.readFileSync(fp, 'utf-8')

var json = ws.lexer(input);
console.log(fs.writeFileSync(fp + '.json', JSON.stringify(json, 0, 2)))


function lexer(str) {
  // strip blanks
  str = str.replace(/\r/g, '');
  str = str.replace(/\n\s*\n/gm, '\n');

  var i = 0;
  var len = str.length;
  while(i++ < len) {
    var ch = str[i]
    if (ch) {}
  }
  // return str;
}

// console.log(lexer(input))
