'use strict';

var inherits = require('util').inherits;
var DefaultRegistry = require('undertaker-registry');


function Erasm() {
  DefaultRegistry.call(this);
}

inherits(Erasm, DefaultRegistry);

Erasm.prototype.task = function _task(name, fn) {
  if(typeof name === 'function'){
    fn = name;
    name = fn.name || fn.displayName;
  }
  if (!fn) {
    return this.get(name);
  }

  function wrapper(done) {
    asyncDone.bind(this, fn.bind(metadata), done)
  }
  this.set(name, wrapper);
  return this;
}
