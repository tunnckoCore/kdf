#!/usr/bin/env node
/**
 * koa-better-ratelimit <https://github.com/tunnckoCore/koa-better-ratelimit>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var exit = process.exit;
var path = require('path');
var meow = require('meow');
var chalk = require('chalk');
var readdir = require('readdir-stream');

'use strict';

var cli = meow({
  // pkg: './glob2fp/package.json',
  help: [
    'Examples',
    '  $ npmls',
    '  gulp',
    '  koa',
    '  tape',
    '  verb',
    '  ...',
    '',
    '  $ npmls --global',
    '  gulp',
    '  should',
    '  mocha',
    '  stylus',
    '  babel',
    '  ...',
    '',
    'Options',
    '  -g|--global  Get all globally installed modules',
    ''
  ].join('\n')
});

var globally = cli.flags.g || cli.flags.global || false;
var printed = [];
var prefix = chalk.bold.green('[npmls] ')
var dir = globally ? installedGlobally() : installedLocally();

function installedGlobally() {
  var nvm = process.env.NVM_BIN;
  return nvm.replace(/\/bin$/, '/lib/node_modules');
}

function installedLocally() {
  return path.join(process.cwd(), 'node_modules');
}

readdir(dir)
.on('data', function _data(file) {
  var pkg = file.path.replace(dir, '').split('/')[1];

  if (printed.indexOf(pkg) === -1) {
    printed.push(pkg);
    var name = chalk.gray(pkg);
    var line = prefix + name + '\n';

    if (pkg !== '.bin' && pkg !== undefined) {
      process.stdout.write(line);
    }
  }
})
.on('error', function _error(err) {
  console.log(err);
  exit(1);
})
.on('end', function _close() {
  var len = printed.length - 2;
  var g = globally ? 'globally' : 'locally'
  var i = chalk.bold.cyan(len + ' ' + g + ' installed modules\n');
  var line = prefix + i;
  process.stdout.write('------------------------------\n');
  process.stdout.write(line)
  exit(0);
});



