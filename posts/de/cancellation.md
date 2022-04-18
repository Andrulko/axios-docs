---
title: 'Anfragen Abbrechen'
prev_title: 'Errorverarbeitung'
prev_link: '/de/docs/handling_errors'
next_title: 'URL-Ähnlich Kodierte Anfragenkörper'
next_link: '/de/docs/urlencoded'
---

## AbortController

Anfragen können mit hilfe eines *Cancel Token*s abgebrochen werden.

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

Ein CancelToken kann wie folgt erstellt werden:

> Diese API basiert auf den zurückgezogen vorschlag für *[abbrechbare Promises](https://github.com/tc39/proposal-cancelable-promises)*.

> Info: Sie können mehrere Anfragen mit dem gleichen CancelToken abbrechen

Ein CancelToken kann auch wie folgt erstellt werden:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Diese funktion bekommt eine funktion zum abbrechen der Anfrage als argument
    cancel = c;
  })
});

// Anfrage abbrechen
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
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Anfrage abgebrochen', thrown.message);
  } else {
    // Error verarbeiten
  }
});

axios.post('/user/12345', {
  name: 'Neuer name'
}, {
  cancelToken: source.token
})

// Anfrage abbrechen. (Das argument mit der Nachricht ist optional.)
source.cancel('Operation canceled by the user.');
```
