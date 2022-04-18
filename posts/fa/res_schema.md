---
title: 'الگوی پاسخ ها'
prev_title: 'پیکربندی درخواست ها'
prev_link: '/docs/req_config'
next_title: 'تنظیمات پیش فرض'
next_link: '/docs/config_defaults'
---

اطلاعات پاسخ برای یک درخواست شامل اطلاعات زیر است:

```js
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  // As of HTTP/2 status text is blank or unsupported.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```

هنگام استفاده از "then"، پاسخ را به شرح زیر دریافت خواهید کرد:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

هنگام استفاده از `catch`, یا استفاده از [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) به عنوان پارامتر دوم `then`, مقدار پاسخ در شیء `error` قابل دسترسی است که در [مدیریت خطاها](/docs/handling_errors) توضیح داده شده است.
