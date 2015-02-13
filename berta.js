//TODO

function berta(template, data, opts) {
  opts = opts || {};
  opts.open = '{{';
  opts.close = '}}'
  var pattern = /\{\{\s?([^\s]+)\s?\}\}/g;

  return template.replace(pattern, function(input, match) {
    var path = match.split('.');
    var len = path.length;
    var cache = data;
    var i = 0;

    while (i < len){
      cache = cache[path[i]];

      if (!cache) {
        return false;
      }

      if (i === len - 1) {
        if (typeof cache === 'function') {
          var fn = cache;
          return cache.call(data);
        }
        return cache;
      }
      i++;
    }
  });
};

var data = {
  user: {
    edit: 'Wikipedia',
    name: {
      age: 21,
      calc: function() {
        return this.user.name.age + 4;
      }
    }
  },
  nick: 'Charlike',
}
console.log(
  berta('created by New {{ nick }} {{user.edit}} Campaigns, the {{ user.name.age }}\
    behind and {{user.name.calc}}.',
   data)
  )
