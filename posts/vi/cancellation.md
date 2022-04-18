---
title: 'Bãi bỏ Request'
prev_title: 'Xử trí lỗi'
prev_link: '/vi/docs/handling_errors'
next_title: 'Phần thân URL-Encoding'
next_link: '/vi/docs/urlencoded'
---

## AbortController

Bạn có thể bãi bỏ request bằng cách sử dụng *token bãi bỏ*

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

Bạn có thể tạo ra một token bãi bỏ bằng cách sử dụng phương thức factory `CancelToken.source` như sau:

> API token bãi bỏ trong axios là dựa trên [đề xuất cancelable promise](https://github.com/tc39/proposal-cancelable-promises) đã bị thu hồi.

> Lưu ý: bạn có thể dùng chung một token bãi bỏ để bãi bỏ nhiều request.

Bạn còn có thể tạo ra một token bãi bỏ bằng cách truyền một hàm thực thi vào constructor `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Hàm thực thi nhận vào một tham số là hàm bãi bỏ, lưu nó lại
    cancel = c;
  })
});

// bãi bỏ request
cancel();
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
