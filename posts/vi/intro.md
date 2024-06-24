---
title: 'Bắt đầu'
description: 'Thư viện HTTP Client dựa trên Promise dành cho trình duyệt và node.js'
next_title: 'Ví dụ cơ bản'
next_link: '/vi/docs/example'
---

# Axios là gì?
Axios is a *[promise-based](https://javascript.info/promise-basics)* HTTP Client for [`node.js`](https://nodejs.org) and the browser. It is *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.

# Tính năng

- Tạo request từ trình duyệt bằng [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- Tạo request từ node.js bằng [http](http://nodejs.org/api/http.html)
- Hỗ trợ [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Đón chặn request và response
- Biến đổi dữ liệu request và response
- Bãi bỏ request
- Tự động chuyển đổi cho dữ liệu JSON
- Hỗ trợ phía client bảo vệ chống lại [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Cài đặt

Sử dụng npm:

```bash
$ npm install axios
```

Sử dụng bower:

```bash
$ bower install axios
```

Sử dụng yarn:

```bash
$ yarn add axios
```

Sử dụng jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Sử dụng unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```