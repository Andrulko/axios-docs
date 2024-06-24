---
title: 'Скасування'
prev_title: 'Обробка помилок'
prev_link: '/uk/docs/handling_errors'
next_title: 'URL-кодування тіла'
next_link: '/uk/docs/urlencoded'
---

## AbortController

Ви можете скасувати запит, використовуючи *маркер скасування* (або *cancel token*).

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

Ви можете створити маркер скасування, використовуючи фабрику `CancelToken.source`, як показано нижче:

> The axios cancel token API is based on the withdrawn [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).

> Note: you can cancel several requests with the same cancel token.

Ви також можете створити маркер скасування, передавши функцію виконавця конструктору `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Виконавча функція (або executor function) отримує функцію скасування як параметр
    cancel = c;
  })
});

// скасування запиту
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
