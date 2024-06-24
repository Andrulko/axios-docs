---
title: 'Починаючи'
description: 'Заснований на Promise HTTP клієнт для браузеру та Nodejs'
next_title: 'Мінімальний приклад'
next_link: '/uk/docs/example'
---

# Що таке Axios?
Axios is a *[promise-based](https://javascript.info/promise-basics)* HTTP Client for [`node.js`](https://nodejs.org) and the browser. It is *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.

# Переваги

- Робить [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) запити з браузеру
- Робить [http](http://nodejs.org/api/http.html) запити з node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Перехопити запит і відповідь
- Перетворення даних запиту та відповіді
- Скасувати запити
- Автоматичне перетворення даних JSON
- Підтримка на стороні клієнта для захисту від [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Встановлення

Використовуючи npm:

```bash
$ npm install axios
```

Використовуючи bower:

```bash
$ bower install axios
```

Використовуючи yarn:

```bash
$ yarn add axios
```

Використовуючи jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Використовуючи unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```