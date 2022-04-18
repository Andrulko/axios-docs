---
title: 'Ví dụ cơ bản'
description: 'Ví dụ nhỏ về cách sử dụng Axios'
prev_title: 'Giới thiệu'
prev_link: '/vi/docs/intro'
next_title: 'POST Request'
next_link: '/vi/docs/post_example'
---

## Lưu ý: Cách dùng với CommonJS
Để có được định nghĩa kiểu dữ liệu TypeScript (cho intellisense / autocomplete) trong khi sử dụng phép import của CommonJS (tức `require()`), hãy sử dụng phương pháp sau đây:

```js
const axios = require('axios').default;

// Giờ axios.<phương thức> sẽ cung cấp autocomplete và định nghĩa kiểu dữ liệu tham số
```

# Ví dụ

Phát đi một `GET` request

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

> **LƯU Ý:** `async/await` là một phần của ECMAScript 2017, không được hỗ trợ trong Internet Explorer và những trình duyệt cũ, cho nên khi sử dụng thì phải để ý.