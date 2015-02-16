#!/usr/bin/env node
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
