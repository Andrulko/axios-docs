---
title: 'POST-Anfragen'
description: 'Minimalbeispiel'
prev_title: '/de/docs/example'
prev_link: 'Axios-API'
next_title: '/de/docs/api_intro'
next_link: '/docs/api_intro'
---

Eine `POST`-Anfrage ausführen:

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Mehrere anfragen gleichzeitig:

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```
