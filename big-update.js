// var path = require('path');
// var run = require('exec-cmd');
// var diff = require('arr-diff');
// var got = require('then-got');
// var each = require('promise-each');
// var gitclone = require('./gitclone');
// var api = 'https://api.github.com/users/tunnckoCore/repos';
var gulp = require('gulp');
var through2 = require('through2');


// var template = `sudo: false
// language: "node_js"
// node_js:
//   - "iojs"
//   - "0.10"
//   - "0.11"
//   - "0.12"
// matrix:
//   allow_failures:
//     - node_js: "0.10"
//   fast_finish: true
// script: "npm run-script test-travis"
// after_script: "npm install coveralls && cat ./coverage/lcov.info | coveralls"`;

// function runthis(cmd, opts) {
//   return function() {
//     return run(cmd, opts)
//   }
// }

// gulp.src(['./tunnckoCore/**/.travis.yml'])
// .pipe(through2.obj(function(file, enc, next) {
//   process.chdir(path.dirname(file.path))
//   run('git commit -m', ['faster travis and iojs + v0.12 support'], {stdio: 'inherit'})
//   .then(function() {
//     run('git push', {stdio: 'inherit'})
//   })
//   .then(function() {
//     next()
//   })
//   .catch(console.log)

// }))
// // .pipe(gulp.dest('./tunnckoCore'))



// // var excludes = [
// //   'spawn-commands', 'filter-values', 'is-glob', 'opn', 'lsd',
// //   'microjs.com', 'micromatch', 'export-files', 'assemble-middleware-wordcount',
// //   'whistle-latest', 'php-smvcd','docks', 'promise-bench', 'pkg-open', 'promistein',
// //   'feedback', 'bookstore-manager', 'fileupload-manager', 'whistle-prerelease', 'kdf',
// //   'gitclone', 'gitclone-cli', 'github-clone-fork', 'gitfork', 'gitfork-cli',
// //   'fs-readdir', 'coreflow', 'coreflow-templates', 'tunnckoCore.github.io', 'dotfiles'
// // ];

// // var repos = [];

// // req(1)
// // .then(function() {
// //   return req(2);
// // })
// // .then(function() {
// //   return req(3);
// // })
// // .then(function() {
// //   var res = diff(repos, excludes);
// //   // console.log(JSON.stringify(res, 0, 2));
// //   // console.log(res.length);
// //   return res;
// // })
// // .then(each(function(name) {
// //   return gitclone('tunnckoCore/' + name, {
// //     branch: 'master',
// //     stdio: [null, null, null],
// //     dest: 'tunnckoCore/' + name,
// //     ssh: true
// //   });
// // }))

// // function req(page) {
// //   return got.get(api + '?page=' + page).then(then)
// // }

// // function then(res) {
// //   var body = JSON.parse(res[0]);

// //   body.map(function(item) {
// //     repos.push(item.name);
// //     return item.name;
// //   })
// //   return body;
// // }
