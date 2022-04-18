---
title: 'لغو درخواست'
prev_title: 'مدیریت خطاها'
prev_link: '/docs/handling_errors'
next_title: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
next_link: '/docs/urlencoded'
---

## AbortController

با یک *توکن لغو* (cancel token) می توانید درخواستی را لغو کنید.

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```

## CancelToken `deprecated`

مانند روش زیر می توانید با استفاده از `CancelToken.source` یک توکن لغو ایجاد کنید:

> API توکن لغو Axios بر اساس "withdrawn " نوشته شده است [پیشنهادی برای پرامیس های قابل لغو](https://github.com/tc39/proposal-cancelable-promises).

> Note: you can cancel several requests with the same cancel token.

همچنین می توانید با ایجاد یک تابع اجرایی که به تابع سازنده کلاس `CancelToken` می دهید، یک توکن لغو ایجاد کنید:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```

You can also create a cancel token by passing an executor function to the `CancelToken` constructor:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

> Note: you can cancel several requests with the same cancel token / signal.

During the transition period, you can use both cancellation APIs, even for the same request:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
// OR
controller.abort(); // the message parameter is not supported
```
