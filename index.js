/**
 * current-day-number <https://github.com/datetime/current-day-number>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

/**
 * Get day number of the current date/year or given valid `Date` string format
 *
 * **Example:**
 *
 * ```js
 * var currentDayNumber = require('current-day-number');
 *
 * // june 27, 2014
 * currentDayNumber();
 * //=> 177
 *
 * currentDayNumber('');
 * //=> 177
 *
 * currentDayNumber('August 07, 2015');
 * //=> 218
 *
 * currentDayNumber('August 07, 2016');
 * //=> 219, cuz' year is leap
 *
 * currentDayNumber('02/16/2015');
 * //=> 47
 * ```
 *
 * @name currentDayNumber
 * @param  {String} `[date]` every valid Date-ish string format
 * @return {Number}
 * @api public
 */
module.exports = function currentDayNumber(date) {
  var instance = new Date();

  if (typeof date === 'string' && date.length) {
    instance = new Date(date);
  }

  var now = instance.getTime();
  var start = instance.setMonth(0,0);
  var diff = now - start;

  return (diff / daySeconds(false)) | 0;
};
