

function lexer(input) {
  var css = input
  var len = input.length
  var pos = 0;
  var line = 1;
  var current = null;
  var prev = prevPrev = null;
  var next = nextNext = null;

  while (pos < len) {
    prev      = css.charCodeAt(pos - 1);
    prevPrev  = css.charCodeAt(pos - 2);
    current   = css.charCodeAt(pos);
    nextNext  = css.charCodeAt(pos + 2);
    next      = css.charCodeAt(pos + 1);
  }
}
