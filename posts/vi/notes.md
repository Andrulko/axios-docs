---
title: 'Ghi chú'
description: 'Đôi dòng ghi chú nữa cho trọn vẹn'
prev_title: 'Phần thân URL-Encoding'
prev_link: '/vi/docs/urlencoded'
---

## Semver

Until axios reaches a `1.0` release, breaking changes will be released with a new minor version. For example `0.5.1`, and `0.5.4` will have the same API, but `0.6.0` will have breaking changes.

## Promise

axios depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises). If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios có kèm theo định nghĩa kiểu dữ liệu [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Tài nguyên

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Hướng dẫn nâng cấp](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Hệ sinh thái](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Hướng dẫn đóng góp](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Quy tắc ứng xử](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [Angular](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of Angular.

## Giấy phép

[MIT](https://github.com/axios/axios/blob/master/LICENSE)