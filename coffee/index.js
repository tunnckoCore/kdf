var fs = require('fs');
var Template = require('coffee-templates');
var Stylesheet = require('coffee-stylesheets');

var jsHTML = require('./template.js');
var jsCSS = fs.readFileSync('style.js', 'utf-8');

var globals = {
  px: function(val) {
    return val * 3 + 'rem'
  },
  title: 'my firs!t website!',
  posts: [{
    name: 'Mike',
    comment: 'Hello'
  },{
    name: 'Bob',
    comment: 'How are you?'
  }]
};

var engineHTML = new Template({format: true});
var engineCSS = new Stylesheet({format: true, globals: globals});

console.log(engineHTML.render(jsHTML, globals))
// engineHTML.render(template, function(err, html) {
//   console.log(err, html)
// })
