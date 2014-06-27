# current-day-number [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url]

> Get day number of the current year or given date format.


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 

> Install with [npm](https://npmjs.org)

```bash
$ npm install current-day-number
```


# Usage
```js
var currentDayNumber = require('current-day-number');

// june 27, 2014
currentDayNumber()
//=> 177

currentDayNumber("")
//=> 177

currentDayNumber("August 07, 2015")
//=> 218

currentDayNumber("August 07, 2016")
//=> 219, cuz' year is leap

currentDayNumber("02/16/2015")
//=> 47
```


## Tests
> As usual `npm test` **or** if you have [mocha][mocha-url] globally `mocha`

```bash
$ npm test
```


## API

### yearSeconds([date])

#### date

Type: `string`  
Default: current date (day)

Every valid Date-ish string   

## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]
**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/current-day-number/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[mocha-url]: https://github.com/visionmedia/mocha

[npmjs-url]: http://npm.im/current-day-number
[npmjs-img]: http://img.shields.io/npm/v/current-day-number.svg
[npmjs-install]: https://nodei.co/npm/current-day-number.png?mini=true

[license-url]: https://github.com/tunnckoCore/current-day-number/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/current-day-number
[travis-img]: https://travis-ci.org/tunnckoCore/current-day-number.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/current-day-number
[depstat-img]: https://david-dm.org/tunnckoCore/current-day-number.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
