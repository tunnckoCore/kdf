/**
 * gack <https://github.com/tunnckoCore/gack>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

// var eachIndex = require('each-string-index');
var charCodes = require('char-codes')();
function reset() {
  return {
    type: '',
    name: '',
    value: '',
    meta: {
      position: 0,
      start: {
        line: 1,
        column: 1
      },
      end: {
        line: 1,
        column: 1
      }
    }
  };
}

function chars(str, pos) {
  return {
    pos: pos,
    char: str.charAt(pos),
    code: str.charCodeAt(pos),
    prev1: {
      pos: pos-1,
      char: str.charAt(pos-1),
      code: str.charCodeAt(pos-1)
    },
    next1: {
      pos: pos+1,
      char: str.charAt(pos+1),
      code: str.charCodeAt(pos+1)
    },
    prev2: {
      pos: pos-2,
      char: str.charAt(pos-2),
      code: str.charCodeAt(pos-2)
    },
    next2: {
      pos: pos+2,
      char: str.charAt(pos+2),
      code: str.charCodeAt(pos+2)
    }
  };
}

module.exports = function gack2(css, opts) {
  if (typeof css !== 'string') {
    throw new TypeError('[gack] expects a string')
  }
  opts = opts || {};

  var pos = 0;
  var raw = '';
  var word = '';
  var len = css.length;
  var ast = {nodes: []};
  var obj = reset();
  var line = 1;
  var column = 1;
  var space = 0;
  var prevSpacePos = 0;

  while (pos < len) {
    pos++;
    var chr = chars(css, pos);

    if (chr.prev1.code === charCodes.at.code) {
      obj.type = 'atrule'
      obj.start.line = line;
      obj.start.column = column++;
      obj.position = pos;
    }
    if (obj.name === '' && chr.code === charCodes.space.code) {
      // console.log(raw, pos)
      // obj.name = word = raw.slice(0, pos);
    }
    if (obj.name === word && chr.next1.code === 10) {
      // obj.end.line = line;
      // obj.end.column = pos;
    }
    if (chr.code === 10) {
      line++;
      column = 1;
      ast.nodes.push(obj);
      obj = reset();
    }

  }
  return ast;
}



/**
 * [gack description]
 * @param  {[type]} css  [description]
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
function gack(css, opts) {
  if (typeof css !== 'string') {
    throw new TypeError('[gack] expects a string')
  }
  opts = opts || {};

  var pos = 0;
  var raw = '';
  var word = '';
  var ast = {nodes: []};
  var len = css.length;
  var line = 1;
  var node = 0;
  var space = 0;
  var cpos = 0;
  var initial = reset();

  function reset() {
    return {
      type: '',
      name: '',
      value: '',
      start: {
        line: 1,
        column: 1
      },
      end: {
        line: 1,
        column: 1
      }
    }
  };

  while (pos < len) {
    var ch= css.charAt(pos);
    var chr = css.charCodeAt(pos);
    var prev = css.charCodeAt(pos-1);
    var next = css.charCodeAt(pos+1);
    var prevPrev = css.charCodeAt(pos-2);
    var nextNext = css.charCodeAt(pos+2);

    raw += ch;
    var rawLength = raw.length;

    // multiline comment start `/` && `*`
    if (prevPrev === charCodes.forwardslash.code && prev === charCodes.star.code) {
      initial.type = initial.name = 'comment';
      initial.start.line = line;
      initial.start.column = pos;
    }
    // multiline comment end `*` && `/`
    else if (next === charCodes.star.code && nextNext === charCodes.forwardslash.code) {
      initial.value = raw.slice(initial.start.column);
      initial.end.line = line;
      initial.end.column = pos;
      ast.nodes.push(initial);
      initial = reset();
      node++;
    } else if (prev === charCodes.at.code) {
      initial.type = 'atrule'
      initial.start.line = line;
      initial.start.column = pos;
    } else if (chr === charCodes.space.code) {
      space++;
      if (space === 1) {
        initial.name = raw.slice(initial.start.column,pos);
      }
      cpos = pos+1
    } else if (chr === 10) {
      initial.value = raw.slice(cpos,pos)
      initial.end.line = line;
      initial.end.column = pos;
      ast.nodes.push(initial);
      line++;
      space = 0
      initial = reset();
    }

    pos++
  }
  return ast;
};
