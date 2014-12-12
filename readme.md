# current-day-number [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![datetime org][datetime-img]][datetime-url]
> Get day number of the current date/year or given valid `Date` string format


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install current-day-number
$ npm test
```


## Usage
```js
var currentDayNumber = require('current-day-number');

// june 27, 2014
currentDayNumber();
//=> 177

currentDayNumber('');
//=> 177

currentDayNumber('August 07, 2015');
//=> 218

currentDayNumber('August 07, 2016');
//=> 219, cuz' year is leap

currentDayNumber('02/16/2015');
//=> 47
```
> For more use-cases see [tests](./test.js)


## [.currentDayNumber](index.js#L18)
- `[date]` **{String}** every valid Date-ish string format


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/current-day-number
[npmjs-img]: http://img.shields.io/npm/v/current-day-number.svg
[npmjs-ico]: https://nodei.co/npm/current-day-number.svg?mini=true

[coveralls-url]: https://coveralls.io/r/datetime/current-day-number?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/current-day-number.svg

[license-url]: https://github.com/datetime/current-day-number/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/datetime/current-day-number
[travis-img]: https://travis-ci.org/datetime/current-day-number.svg

[depstat-url]: https://david-dm.org/datetime/current-day-number
[depstat-img]: https://david-dm.org/datetime/current-day-number.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/current-day-number/graphs/contributors

[datetime-img]: http://img.shields.io/badge/datetime-approved-brightgreen.svg
[datetime-url]: https://github.com/datetime