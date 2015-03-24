// function _root() {
//   doctype(5);
//   return html(function() {
//     head(function() {
//       meta({
//         charset: 'utf-8'
//       });
//       title((this.title || 'Untitled') + " | A completely plausible website");
//       if (this.description != null) {
//         meta({
//           name: 'description',
//           content: this.description
//         });
//       }
//       link({
//         rel: 'stylesheet',
//         href: '/css/app.css'
//       });
//       style('body {font-family: sans-serif}\nheader, nav, section, footer {display: block}');
//       comment('Stylus is not supported but CoffeeStyleshets might be');
//       script({
//         src: '/js/jquery.js'
//       });
//       return coffeescript(function() {
//         return $(document).ready(function() {
//           return alert('Alerts suck!');
//         });
//       });
//     });
//     return body(function() {
//       header(function() {
//         h1(this.title || 'Untitled');
//         return nav(function() {
//           return ul(function() {
//             if (this.path !== '/') {
//               li(function() {
//                 return a({
//                   href: '/'
//                 }, function() {
//                   return 'Home';
//                 });
//               });
//             }
//             li(function() {
//               return a({
//                 href: '/chunky'
//               }, function() {
//                 return 'Bacon!';
//               });
//             });
//             switch (this.user.role) {
//               case 'owner':
//               case 'admin':
//                 return li(function() {
//                   return a({
//                     href: '/admin'
//                   }, function() {
//                     return 'Secret Stuff';
//                   });
//                 });
//               case 'vip':
//                 return li(function() {
//                   return a({
//                     href: '/vip'
//                   }, function() {
//                     return 'Exclusive Stuff';
//                   });
//                 });
//               default:
//                 return li(function() {
//                   return a({
//                     href: '/commoners'
//                   }, function() {
//                     return 'Just Stuff';
//                   });
//                 });
//             }
//           });
//         });
//       });
//       div('#myid.myclass.anotherclass', {
//         style: 'position: fixed'
//       }, function() {
//         return p('Divitis kills! Inline styling too.');
//       });
//       section(function() {
//         var i, j;
//         breadcrumb({
//           separator: '>',
//           clickable: true
//         });
//         h2("Let's count to 10:");
//         for (i = j = 1; j <= 10; i = ++j) {
//           p(i);
//         }
//         return form_to(this.post, function() {
//           textbox('#title', {
//             label: 'Title:'
//           });
//           textbox('#author', {
//             label: 'Author:'
//           });
//           return submit('Save');
//         });
//       });
//       return footer(function() {
//         comment('HTML comments.');
//         return p('Bye!');
//       });
//     });
//   });
// };

function __root() {
  doctype(5, this.title)
}
var globals = {
  doctype: function(num, bam) {
    console.log(num, '!', bam)
  }
};
var locals = {
  title: 'the best'
}
var ss = (Function('globals', 'locals', 'with(globals){(' + __root + ').call(locals)}'))(globals, locals);
