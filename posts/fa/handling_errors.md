---
title: 'مدیریت خطاها'
prev_title: 'رهگیرها'
prev_link: '/docs/interceptors'
next_title: 'لغو درخواست ها'
next_link: '/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

با استفاده از گزینه validateStatus ، می توانید کد (های) HTTP را که باید خطا ایجاد کنند ، تعریف کنید.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // فقط اگر کد وضعیت کمتر از 500 باشد مقدار true است
  }
})
```

با استفاده از تابع `toJSON` می توانید یک شی با اطلاعات بیشتر در مورد خطای HTTP دریافت می کنید.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```