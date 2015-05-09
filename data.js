// var gulp = require('gulp');
// var through2 = require('through2');

// var dataStream = gulp.src('./templates/*.{json,js}');
// var templates = gulp.src('./templates/*.md');

// templates
// .pipe(through2.obj(function(file, _, next) {
//   var self = this;
//   dataStream.pipe(through2.obj(function(data, _, cb) {
//     file.data = data.path;
//     self.push(file)
//     next(null, file)
//     cb();
//   }))
//   next();
// }))
// .pipe(through2.obj(function(file, _, next) {
//   console.log(JSON.stringify(file,0,2))
// }))

// var chars = 'ABEKMHOΠPCTXaeĸopcyxIiJjSs'+'АВЕКМНОПРСТХаекорсухІіЈјЅѕ';
// console.log(chars.length / 2)

// var uniqueify = require('uniqueify');

// var common_obj = {
//   name: 'michael',
//   deep: {
//     year: 2015
//   }
// }
// console.log(uniqueify([1,2,2,3,3,4,5,common_obj,6,common_obj, 7,{name: 'michael'}, [1,2,[3]], 8, [1,2,3], 9, [1,2,[3]], [1,2,3,'random']]))


function emitter(thing){
  if (!thing) thing = {};

  thing.subs = [];

  /**
   * Sub of pubsub
   * @param  {String}   name name of event
   * @param  {Function} cb   your callback
   */
  thing.on = function(name, cb){
    thing.subs[name] = thing.subs[name] || [];
    console.log(thing.subs)
    thing.subs[name].push(cb);
  };

  /**
   * remove sub of pubsub
   * @param  {String}   name name of event
   * @param  {Function} cb   your callback
   */
  thing.off = function(name, cb){
    if (!thing.subs[name]) return;
    for (var i in thing.subs[name]){
      if (thing.subs[name][i] === cb){
        thing.subs[name].splice(i);
        break;
      }
    }
  };

  /**
   * Pub of pubsub
   * @param  {String}   name name of event
   * @param  {Mixed}    data the data to publish
   */
  thing.emit = function(name){
    if (!thing.subs[name]) return;
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i in thing.subs[name]){
      thing.subs[name][i].apply(thing, args);
    }
  };

  return thing;
}


var kitty = {
    purr: function(){
        this.emit('purr');
    },

    eat: function(food){
        this.emit('ate', food);
    }
};


emitter(kitty);

function showAte(food){
    console.log('The kitty was hungry, so it ate', food);
}

function showPurred(){
    console.log('the kitty purred.')
}

kitty.on('ate', showAte);
kitty.eat('meow');



