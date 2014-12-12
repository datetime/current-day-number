/**
 * current-day-number <https://github.com/datetime/current-day-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentDayNumber = require('./index');

describe('current-day-number', function() {
  it('should be greater than 177 or 1 (june 27, 2014 - released)', function(done) {
    assert.ok(currentDayNumber() >= (177 || 1));
    done();
  });
  it('should be 218 for "August 07, 2015" and 47 for "02/16/2015"', function(done) {
    assert.strictEqual(currentDayNumber('March 24, 2015'), 83);
    assert.strictEqual(currentDayNumber('03/24/2016'), 84);
    assert.strictEqual(currentDayNumber('August 07, 2015'), 218);
    assert.strictEqual(currentDayNumber('02/16/2015'), 47);
    assert.strictEqual(currentDayNumber('12/15/2014'), 349);
    done();
  });
  it('should get day number when empty string format', function(done) {
    assert.ok(currentDayNumber('') >= (177 || 1));
    done();
  });
  it('should get current day number, if Date format string is invalid', function(done) {
    assert.ok(currentDayNumber(/regex/g) >= (177 || 1));
    assert.ok(currentDayNumber(true) >= (177 || 1));
    assert.ok(currentDayNumber(false) >= (177 || 1));
    assert.ok(currentDayNumber(222) >= (177 || 1));
    done();
  });
});
