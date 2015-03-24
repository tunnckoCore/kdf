/* @charset 'utf-8'; */
/* start: root.gack.css */
function Gack() {
  var self = this;
  this.root = {
    'helvetica':        '"Helvetica", Arial, sans-serif',
    'georgia':          'Georgia, Cambria, Times, serif',
    'verdana':          'Verdana, "Geneva", sans-serif',

    'blue':             '#0074D9',
    'aqua':             '#7FDBFF',
    'teal':             '#39CCCC',
    'gray':             '#dddddd',

    'size':             '3rem',
    'icon-size':        'calc(' + self.root.size +' / 2)',
    'main-color':       self.root.gray,
    'company':          '\'charlike\''
  }
}
var gack = new Gack();
/* end: mixins.gack.css */
/* start: mixins.gack.css */
function _size(sz) {
  line-height:      calc(sz * 2)      /* required */
  font-size:        sz                  /* required */
}
icons()
  padding-left:     calc(size / 10)
  color:            blue
  content:          #0                  /* required */
  background:       #1 main-color
  size:             size                /* will pass `size` var to `@size` mixin as 0th argument */

/* end: mixins.gack.css */
/* start: index.gack.css */
ul
  padding: size
  li
    a
      .something
        background: teal
    font-size: size
    color: aqua

button
  icons: 'twitter', white, calc(icon-size * 3px)
  border-radius: 5px
  padding: 5px 10px
  /* todo, maybe shadow function? not mixin */
  box-shadow: 0 0 3px red, 0 0 10px green, inset 0 0 3px blue

/* end: index.gack.css */
