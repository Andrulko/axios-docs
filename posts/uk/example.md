---
title: 'Minimal Example'
description: 'A little example of using axios'
prev_title: 'Introduction'
prev_link: '/uk/docs/intro'
next_title: 'POST Requests'
next_link: '/uk/docs/post_example'
---

## Примітка: використання CommonJS
Для того, щоб отримати типи TypeScript (для intellisense / автозаповнення) під час використання імпорту CommonJS з `require()`, використовуйте такий підхід:

```js
const axios = require('axios').default;

// axios.<method> тепер забезпечуватиме автозаповнення та введення параметрів
```

# Example

Виконання `GET` запиту

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> ** ПРИМІТКА: ** `async/await` є частиною ECMAScript 2017 і не підтримується в Інтернеті Explorer та старіші веб -переглядачі, тому використовуйте їх з обережністю.