---
title: 'Переклад документації'
---

To make Axios accessible to as many people as possible, it is important that these docs can be read in all languages. We always appreciate anyone who wants to help translate the documentation. This guide provides instructions for adding a translation to this documentation.

## Структура

Every translation is composed of a configuration file, `{language-shortcut}.lang.js` (for example, `en.lang.js` or `de.lang.js`) and the translated documentation files in `posts/{language-shortcut}/*.md` (for example `posts/en` or `posts/de`). `{language-shortcut}` should be replaced with your language's [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter code.

## Налаштування вашої мови

 - Скопіюйте `en.lang.js`.
 - Перейменуйте його на `{language-shortcut}.lang.js`.
 - Replace `display` with the name of your language, in your language. For example, if you're translating german, place “Deutsch” instead of “German”.
 - Замініть префікс на `/{language-shortcut}/`.
 - Перекладіть значення в поля `p` і `t`.
 - Translate all the properties labeled `text` in the sidebar. **Note:** Since the latest version of this documentation, links in the sidebar no longer need to be updated.

### Реєстрація конфігурації

Once you've finished configuring your language and translating the phrases and links in the configuration file, you'll need to register it in the root configuration. To do this, open `inert.config.js` and add the following line near the top:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

Звичайно, не забудьте замінити `{language-shortcut}` правильним кодом [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) (також у назві змінної!).

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

Якщо у вас виникли проблеми, не соромтеся [створити issue](https://github.com/axios/axios-docs/issues/new/choose).