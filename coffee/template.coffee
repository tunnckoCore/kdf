__data = ->
  #doctype 5
  html ->
    head ->
      meta charset: 'utf-8'
      title @title
      meta name: 'description', content: @title 
    body ->
      div id: 'content', title: @title, ->
        for post in @posts
          div class: 'post', ->
            p post.name + ' said:' + @px 5
            div post.comment
      form method: 'post', ->
        ul ->
          li -> input name: 'name'
          li -> textarea name: 'comment'
          li -> input type: 'submit'

      section '''
      lorem ipsum sin
      sit amet bermud cos
      '''