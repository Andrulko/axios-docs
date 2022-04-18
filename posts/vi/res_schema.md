---
title: 'Kết cấu Response'
prev_title: 'Cấu hình Request'
prev_link: '/vi/docs/req_config'
next_title: 'Cấu hình Mặc định'
next_link: '/vi/docs/config_defaults'
---

Response của một request thì chứa những thông tin sau.

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

Khi sử dụng `then`, bạn sẽ truy xuất response như sau:

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

Khi sử dụng `catch`, hoặc khi truyền [callback từ chối](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) vào làm tham số thứ hai của `then`, thì sẽ lấy được response thông qua đối tượng `error` như có giải thích trong mục [Xử trí lỗi](/vi/docs/handling_errors).
