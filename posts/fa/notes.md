---
title: 'نکات'
description: 'چند نکته ای دیگر برای جمع بندی'
prev_title: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
prev_link: '/docs/urlencoded'
---

## ورژن دهی

Until axios reaches a `1.0` release, breaking changes will be released with a new minor version. For example `0.5.1`, and `0.5.4` will have the same API, but `0.6.0` will have breaking changes.

## Promise ها

axios depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises). If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios شامل تعاریف [TypeScript](http://typescriptlang.org) می شود.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## منابع

* [تغییرات](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [راهنمای ارتقاء](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [زیست بوم](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [راهنمای مشارکت برنامه نویسان](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [قوانین رفتاری](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [Angular](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of Angular.

## مجوز استفاده

[MIT](https://github.com/axios/axios/blob/master/LICENSE)