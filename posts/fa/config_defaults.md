---
title: 'تنظیمات پیش فرض'
prev_title: 'الگوی پاسخ ها'
prev_link: '/docs/res_schema'
next_title: 'رهگیرها'
next_link: '/docs/interceptors'
---

## تنظیمات پیش فرض

می توانید پیش فرض های پیکربندی را که برای هر درخواست اعمال می شود ، مشخص کنید.

### پیش فرض های سراسری axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### پیش فرض برای نمونه سازی سفارشی

```js
// هنگام ایجاد نمونه سازی، پیش فرض های پیکربندی را تنظیم کنید 
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// تغییر پیش فرض ها پس از ایجاد نمونه
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### پیکربندی ترتیب اولویت ها

Config will be merged with an order of precedence. The order is library defaults found in [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), then `defaults` property of the instance, and finally `config` argument for the request. The latter will take precedence over the former. Here's an example.

```js
// با استفاده از تنظیمات پیش فرض پیکربندی ارائه شده توسط کتابخانه ، یک نمونه ایجاد کنید 
// در این مرحله مقدار timeout به صورت پیش فرض `0` است 
const instance = axios.create();

// تغییر مقدار پیش فرض timeout
// حالا تمام درخواست هایی که از این نمونه استفاده می کنند، تا حداکثر 2.5 ثانیه برای اجرای درخواست صبر می کنند
instance.defaults.timeout = 2500;

// تغییر دوباره زمان انتظار اجرای درخواست، اگر انتظار داریم که مدت زمان زیادی برای اجرای درخواست طول می کشد
instance.get('/longRequest', {
  timeout: 5000
});
```
