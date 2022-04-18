---
title: 'Cancelación'
prev_title: 'Manejando Errores'
prev_link: '/es/docs/handling_errors'
next_title: 'Cuerpos de solicitud codificados como URL'
next_link: '/es/docs/urlencoded'
---

## AbortController

Puedes cancelar una petición usando un *token de cancelación*.

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

Puedes crear un token de cancelación usando el factory `CancelToken.source` a como se muestra a continuación:

> El API del token de cancelación de axios esta basado en el retiro de [propuesta de promesas cancelables](https://github.com/tc39/proposal-cancelable-promises).

> Nota: puedes cancelar varias peticiones con el mismo token de cancelación.

También puedes crear un token de cancelación pasando una función ejecutora al constructor `CancelToken`:

```js
const CancelToken = axios. CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manejar error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancelar la petición (el parametro mensaje es opcional)
source.cancel('Operation canceled by the user.');
```

You can also create a cancel token by passing an executor function to the `CancelToken` constructor:

```js
const CancelToken = axios. CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Una función ejecutora recibe una función de cancelación como parámetro
    cancel = c;
  })
});

// cancelar la petición
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
