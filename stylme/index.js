var readYaml = require('read-yaml');
var reduce = require('reduce-object');
var filter = require('object.filter');
var map = require('object.map');

readYaml('roots.settings.yaml', function(err, data) {
  if (err) throw err;
  var orig = data.vars;
  var str = JSON.stringify(data)

  data.vars = map(data.vars, function(val, key, obj) {
    return obj.hasOwnProperty(val) || ? obj[key] = obj[val] : obj[key];
  });

  console.log(data)

});
