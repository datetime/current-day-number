/*!
 * current-day-number <https://github.com/tunnckoCore/current-day-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentDayNumber = require('./');

it('should be greater than 177 (june 27, 2014 - released)', function () {
  assert(currentDayNumber() >= 177);
});
it('should be 218 for "August 07, 2015" and 47 for "02/16/2015"', function () {
  assert(currentDayNumber("August 07, 2015") === 218);
  assert(currentDayNumber("02/16/2015") === 47);
});
it('should get current day number, if date string is invalid', function () {
  assert(currentDayNumber("") >= 177);
});
