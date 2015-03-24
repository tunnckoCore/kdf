/**
 * gack <https://github.com/tunnckoCore/gack>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var assert = require('assert');
var gack = require('./index');
var balancedMatch = require('balanced-match');

var input = fs.readFileSync('./fixtures/bundle.gack.styl', 'utf-8');
var ast = gack(input)

console.log(ast.nodes)
