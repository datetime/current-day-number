## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get day number of the current date/year or given valid `Date` string format

## Install
```
npm i --save current-day-number
npm test
current-day-number --help
```


## API
> For more use-cases see the [tests](./test.js)

### [currentDayNumber](./index.js#L42)
> Get day number of the current date/year or given valid `Date` string format

- `[date]` **{String}** every valid Date-ish string format
- `return` **{Number}**

**Example:**

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

## CLI
> You can just run `current-day-number --help` for more information.

![current day number cli image](http://i.gyazo.com/f8e629c80cb2ea5641f251f3c017fecb.png)


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/current-day-number
[npmjs-img]: https://img.shields.io/npm/v/current-day-number.svg?style=flat&label=current-day-number

[coveralls-url]: https://coveralls.io/r/datetime/current-day-number?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/current-day-number.svg?style=flat

[license-url]: https://github.com/datetime/current-day-number/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/current-day-number
[travis-img]: https://img.shields.io/travis/datetime/current-day-number.svg?style=flat

[daviddm-url]: https://david-dm.org/datetime/current-day-number
[daviddm-img]: https://img.shields.io/david/datetime/current-day-number.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/current-day-number/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 02, 2015_