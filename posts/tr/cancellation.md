---
title: 'İptal Etme'
prev_title: 'Hataları Ele Alma'
prev_link: '/docs/handling_errors'
next_title: 'URL-Encoding Gövdeleri'
next_link: '/docs/urlencoded'
---

## AbortController

Bir isteği *cancel token* kullanarak iptal edebilirsiniz.

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Executor fonksiyonu iptal etme fonksiyonunu parametre olarak alır.
cancel = c;
  })
});

// isteği iptal et
cancel();
```

## CancelToken `deprecated`

`CancelToken.source` fabrikasını kullanarak aşağıda gösterildiği gibi cancel token oluşturabilirsiniz:

> Axios cancel token API'si geri çekilmiş [iptal edilebilir promiseler tasarısı](https://github.com/tc39/proposal-cancelable-promises)'na dayalıdır.

> Note: aynı cancel token ile birçok isteği iptal edebilirsiniz.

Ayrıca, `CancelToken` yapıcısına (constructor) bir executor fonksiyonu vererek de cancel token oluşturabilirsiniz.

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('İstek iptal edildi', thrown.message);
  } else {
    // hatayı ele al
  }
});

axios.post('/user/12345', {
  name: 'yeni isim'
}, {
  cancelToken: source.token
})

// isteği iptal et (mesaj parametresi isteğe bağlıdır)
source.cancel('İşlem kullanıcı tarafından iptal edildi.');
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
