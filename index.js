/**
 * current-day-number <https://github.com/datetime/current-day-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

/**
 * Get day number of the current date/year or given valid `Date` string format
 *
 * @param  {String} `[date]` every valid Date-ish string format
 * @return {Number}
 */
module.exports = function currentDayNumber(date) {
  var instance;

  if (date && typeof date === 'string') {
    instance = new Date(date);
  } else {
    instance = new Date();
  }

  var now = instance.getTime();
  var start = instance.setMonth(0,0);
  var diff = now - start;

  return (diff / daySeconds(true)) | 0;
};
