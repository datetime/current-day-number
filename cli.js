#!/usr/bin/env node
/**
 * current-day-number <https://github.com/datetime/current-day-number>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var pkg = require('./package.json');
var currentDayNumber = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Example',
    '    $ current-day-number',
    '    47'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  return help();
}

if (argv.indexOf('--version') !== -1) {
  return console.log(pkg.version);
}

console.log(currentDayNumber(argv.join('')));
