---
title: 'Cancelamento'
prev_title: 'Manipulando erros'
prev_link: '/ptBR/docs/handling_errors'
next_title: 'Corpo de codificação de URL'
next_link: '/ptBR/docs/urlencoded'
---

## AbortController

Você pode cancelar uma requisição usando um *cancel token*.

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

Você pode criar um token de cancelamento usando o `CancelToken.souce` conforme mostrado abaixo:

> O token de cancelamento do axios é baseado em retirada [proposta de promessas canceláveis](https://github.com/tc39/proposal-cancelable-promises).

> Nota: você pode cancelar multiplas requisições com o mesmo token de cancelamento.

Você também poder criar um token de cancelamento passando uma função executora para o construtor de `CancelToken`

```js
const CancelToken = axios. CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manipulando erro
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancela a requisição (o parâmetro de mensagem é opcional)
source.cancel('Operação cancelada pelo usuário');
```

You can also create a cancel token by passing an executor function to the `CancelToken` constructor:

```js
const CancelToken = axios. CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Uma função executora recebe uma função de cancelamento como parametro
    cancel = c;
  })
});

// cancela a requisição
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
