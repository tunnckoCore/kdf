
// var fs = require('fs')
// var Store = require('undertaker-registry');
// var postcss = require('postcss');
// var css = new Store();

// var root = {
//   type: 'root',
//   nodes: []
// }

// var input = fs.readFileSync('./fixtures/play/gack/bundle.gack.styl', 'utf-8')


// // var ast = postcss([require('postcss-nested')]).process(input)
// // console.log(ast.css)
// // console.log(JSON.stringify(ast, 0, 2))
// // fs.writeFileSync('./fixtures/play/post.json', JSON.stringify(ast, 0, 2))

// var len = input.length, i = 0, line = 1, comment = 1, space = 0, cpos = 0;
// var word = '', raw = ''
// var o = {type: '', name: '', params: '', line: 1};

// while(i < len) {
//   var ch = input.charAt(i);
//   var pre = input.charAt(i-2); // prev prev
//   var prev = input.charAt(i-1);
//   var next = input.charAt(i+1);
//   var post = input.charAt(i+2); // next next

//   raw += ch

//   if (ch === '/' && next === '*') {
//     o.type = 'comment';
//     o.start = i;
//     cpos = i+2
//   }
//   if (prev === '*' && ch === '/') {
//     o.text = o.comment = raw.slice(cpos,-2)
//     o.end = i;
//     comment++;
//   }

//   if (ch === '@') {
//     o.type = 'atrule';
//   } else if (space === 0 && ch === ':' && next === ' ') {
//     o.type = 'variable';
//   } else if (ch === ' ') {
//     space++;
//     if (space === 1) {
//       o.name = word;
//       word = ''
//     } else {
//       word += ' '
//       o.params = word;
//     }
//     o.name = o.type === 'comment' ? 'comment' + comment : word;
//   } else if (ch === '\n') {
//     line++;
//     o.params = word;
//     root.nodes.push(o);

//     //resets
//     o = {type: '', name: '', params: '', line: line};
//     space = 0;
//     word = '';
//   } else if (!/\s+/.test(ch)) {
//     word += ch;
//   }
//   i++;

// }

// console.log(root.nodes)

console.log('size:'.slice(0,-1))



































// css.set(':root', {
//   /* fonts */
//   'helvetica': '"Helvetica", Arial, sans-serif',
//   'georgia': 'Georgia, Cambria, Times, serif',
//   'verdana': 'Verdana, "Geneva", sans-serif',

//   /* colors */
//   'blue': '#0074D9',
//   'aqua': '#7FDBFF',
//   'teal': '#39CCCC',
//   'olive': '#3D9970',
//   'green': '#2ECC40',
//   'lime': '#01FF70',
//   'yellow': '#FFDC00',
//   'orange': '#FF851B',
//   'red': '#D13F19',
//   'maroon': '#85144B',
//   'fuchsia': '#F012BE',
//   'purple': '#B10DC9',
//   'white': '#FFFFFF',
//   'silver': '#DDDDDD',
//   'gray': '#AAAAAA',
//   'black': '#222222',

//   /* font settings */
//   'font-stack': 'verdana',
//   'font-size': '16',
//   'font-color': 'green',
//   '.bordered': {
//     'border-radius': '5px',
//     'border': '3px solid $0? orange',
//     'font-family': '$1? verdana',
//     'color': '$2? font-color',
//   }
// })
// css.set('.homepage', {
//   'color': '#333',
//   'background': 'white',
//   'font-size': '2rem',
//   'padding-top': '5px',
// })
// css.set('.homepage .content p', {
//   'font-size': '110%',
//   'border-radius': '55px',
// })
// css.set('.homepage .content', {
//   'margin': '10px 10px',
//   'font-weight': 'bold',
// })
// css.set('.foo', {
//   'bordered': 'yellow, georgia, maroon',
//   'opacity': '0.5',
//   'background': 'font-color',
// })
// css.set('.bar', {
//   'bordered': 'default',
//   'color': 'lime',
//   'border-radius': '10px',
//   'box-sizing': 'border-box',
// })
// css.set('.baz', {
//   'bordered': 'fuchsia, georgia',
//   'font-family': 'helvetica',
//   'background-size': '155px',
// })
// css.set('button:hover', {
//   'color': 'red 10px',
// })
// css.set('button:active', {
//   'color': 'blue',
// })
// css.set('button .active', {
//   'color': 'orange',
//   'margin': '10px 10px',
// })
// css.set('ul', {
//   'padding': '10px',
// })
// css.set('ul li a .something', {
//   'color': 'white',
// })
// css.set('button', {
//   'border-radius': '5px',
//   'padding': '5px 10px',
//   'box-shadow': '0 0 3px red, 0 0 10px green, inset 0 0 3px blue',
// })
// css.set('@media print', {
//   '.homepage': {
//     'padding-top': '0',
//   },
//   'button': {
//     'border-radius': '0',
//     'width': '100%',
//   }
// })
