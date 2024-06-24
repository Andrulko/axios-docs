---
title: 'Замітки'
description: 'Ще пару приміток, щоб завершити'
prev_title: 'URL-кодування тіла'
prev_link: '/uk/docs/urlencoded'
---

## Semver

Until axios reaches a `1.0` release, breaking changes will be released with a new minor version. For example `0.5.1`, and `0.5.4` will have the same API, but `0.6.0` will have breaking changes.

## Promises

axios depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises). If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios містить визначення [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Resources

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Посібник з оновлення](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Екосистема](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Посібник для співавторів](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [Angular](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of Angular.

## Ліцензія

[MIT](https://github.com/axios/axios/blob/master/LICENSE)