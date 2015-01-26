/**
 * current-day-number <https://github.com/datetime/current-day-number>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentDayNumber = require('./index');

describe('current-day-number:', function() {
  it('should be greater than 177 or 1 (june 27, 2014 - released)', function(done) {
    assert.strictEqual(typeof currentDayNumber(), 'number');
    done();
  });
  it('should be 218 for "August 07, 2015" and 47 for "02/16/2015"', function(done) {
    assert.strictEqual(currentDayNumber('March 24, 2015'), 83);
    assert.strictEqual(currentDayNumber('03/24/2016'), 84);
    assert(currentDayNumber('August 07, 2015') >= 218);
    assert.strictEqual(currentDayNumber('02/16/2015'), 47);
    assert.strictEqual(currentDayNumber('12/15/2014'), 349);
    done();
  });
  it('should get current day number when empty string format', function(done) {
    assert.strictEqual(typeof currentDayNumber(''), 'number');
    done();
  });
  it('should get current day number, if Date format string is invalid', function(done) {
    assert.strictEqual(typeof currentDayNumber(/regex/g), 'number');
    assert.strictEqual(typeof currentDayNumber(true), 'number');
    assert.strictEqual(typeof currentDayNumber(false), 'number');
    assert.strictEqual(typeof currentDayNumber(222), 'number');
    done();
  });
});
