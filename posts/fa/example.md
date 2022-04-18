---
title: 'یک مثال کوچک'
description: 'یک مثال کوچک در استفاده از axios'
prev_title: 'مقدمه'
prev_link: '/docs/intro'
next_title: 'درخواست های ارسال از نوع POST'
next_link: '/docs/post_example'
---

## نکته: استفاده از کد معمول
برای استفاده از قابلیت های (intellisense / autocomplete) در TypeScript، حین استفاده از «require» به صورت زیر استفاده کنید:

```js
const axios = require('axios').default;

// حالا با تایپ axios.<method> لیست توابع این کتابخانه نمایش داده می شود
```

# مثال

انجام درخواست `GET`

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

> **NOTE:** `async/await` is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.