# this line is only required within node
CoffeeTemplates = require 'coffee-templates'

# initialize new engine
engine = new CoffeeTemplates format: true

# provide template expression
template = ->
  doctype 5
  html ->
    head ->
      meta charset: 'utf-8'
      title "#{@title or 'Untitled'} | A completely plausible website"
      meta(name: 'description', content: @description) if @description?

      link rel: 'stylesheet', href: '/css/app.css'

      style '''
        body {font-family: sans-serif}
        header, nav, section, footer {display: block}
      '''

      comment 'Stylus is not supported but CoffeeStyleshets might be'

      script src: '/js/jquery.js'

      coffeescript ->
        $(document).ready ->
          alert 'Alerts suck!'
    body ->
      header ->
        h1 @title or 'Untitled'

        nav ->
          ul ->
            (li -> a href: '/', -> 'Home') unless @path is '/'
            li -> a href: '/chunky', -> 'Bacon!'
            switch @user.role
              when 'owner', 'admin'
                li -> a href: '/admin', -> 'Secret Stuff'
              when 'vip'
                li -> a href: '/vip', -> 'Exclusive Stuff'
              else
                li -> a href: '/commoners', -> 'Just Stuff'

      div '#myid.myclass.anotherclass', style: 'position: fixed', ->
        p 'Divitis kills! Inline styling too.'

      section ->
        # A helper function you built and included.
        breadcrumb separator: '>', clickable: yes

        h2 "Let's count to 10:"
        p i for i in [1..10]

        # Another hypothetical helper.
        form_to @post, ->
          textbox '#title', label: 'Title:'
          textbox '#author', label: 'Author:'
          submit 'Save'

      footer ->
        # CoffeeScript comments. Not visible in the output document.
        comment 'HTML comments.'
        p 'Bye!'


locals =
  title: 'Best website'

# render coffee template to html
console.log engine.render template, locals
