section ->
  background 'black'
  color 'red'
  p ->
    font_size '12px'
    border_radius '5px'
    color 'green'

  comment 'and this is ' + title + ' comment'
  table ->
    border (px 3) + 'solid red'