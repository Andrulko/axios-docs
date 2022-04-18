---
title: 'ترجمه مستندات'
---

To make Axios accessible to as many people as possible, it is important that these docs can be read in all languages. We always appreciate anyone who wants to help translate the documentation. This guide provides instructions for adding a translation to this documentation.

## ساختار

Every translation is composed of a configuration file, `{language-shortcut}.lang.js` (for example, `en.lang.js` or `de.lang.js`) and the translated documentation files in `posts/{language-shortcut}/*.md` (for example `posts/en` or `posts/de`). `{language-shortcut}` should be replaced with your language's [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter code.

## پیکربندی زبان شما

 - از فایل `en.lang.js` کپی بگیرین.
 - آن را به `{اختصار-زبان}.lang.js` تغییر نام دهید.
 - Replace `display` with the name of your language, in your language. For example, if you're translating german, place “Deutsch” instead of “German”.
 - پیشوند را با `/{اختصار-زبان}/` جایگزین کنید.
 - مقادیر درون فیلدهای `p` و `t` را ترجمع کنید.
 - Translate all the properties labeled `text` in the sidebar. **Note:** Since the latest version of this documentation, links in the sidebar no longer need to be updated.

### ثبت پیکربندی زبان

Once you've finished configuring your language and translating the phrases and links in the configuration file, you'll need to register it in the root configuration. To do this, open `inert.config.js` and add the following line near the top:

```js
const {اختصار-زبان}Config = require('./{اختصار-زبان}.config.js');
```

البته به یاد داشته باشید که `{اختصار-زبان}` را با کد دو حرفی استاندارد [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) جایگزین کنید (همچنین در نام متغیرها!).

Now, look for the `langs` constant. If this constant is located above your `require` statement, move your `require` statement above it. To the `langs` list, add the following object:

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // The configuration object you imported earlier
  }
  ...
];
```

Now, you can begin translating the files. Copy the folder `posts/en` into a new folder `posts/{language-shortcut}` and translate all the files (don't translate the filenames, of course).

اگر با مشکلی روبرو شدید، مشکل خود را در [طرح مشکل](https://github.com/axios/axios-docs/issues/new/choose) مطرح کنید.