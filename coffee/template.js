// Generated by CoffeeScript 1.9.1
module.exports = function() {
  doctype(5);
  html(function() {
    head(function() {
      meta({
        charset: 'utf-8'
      });
      title(this.title);
      return meta({
        name: 'description',
        content: this.title
      });
    });
    return body(function() {
      div({
        id: 'content',
        title: this.title
      }, function() {
        var i, len, post, ref, results;
        ref = this.posts;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          post = ref[i];
          results.push(div({
            "class": 'post'
          }, function() {
            p(post.name + ' said:' + this.px(5));
            return div(post.comment);
          }));
        }
        return results;
      });
      return form({
        method: 'post'
      }, function() {
        return ul(function() {
          li(function() {
            return input({
              name: 'name'
            });
          });
          li(function() {
            return textarea({
              name: 'comment'
            });
          });
          return li(function() {
            return input({
              type: 'submit'
            });
          });
        });
      });
      return section('lorem ipsum sin\nsit amet bermud cos');
    });
  });

}
