/*!
 * current-day-number <https://github.com/tunnckoCore/current-day-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

module.exports = function currentDayNumber(date) {
  var instance;
  if (date && typeof date === 'string' && date !== '') {
    instance = new Date(date);
  } else {
    instance = new Date();
  }
  var now = instance.getTime(),
      start = instance.setMonth(0,0),
      diff = now - start;

  return (diff / daySeconds(true)) | 0;
};
