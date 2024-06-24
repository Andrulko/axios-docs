/**
 * Configuration for the english (original) translation
 */
module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: 'Русский',
  prefix: '/ru/',
  dir: 'ltr',
  lang: 'en',
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: 'HTTP-клиент для браузера и node.js на основе Promise',
    subhead: `Axios - простой HTTP-клиент для браузера и node.js на основе Promise.
              Axios предоставляет простую в использовании библиотеку в небольшом пакете с очень расширяющимся интерфейсом.`
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    'Get Started': undefined,
    'View on GitHub': undefined,
    'Languages': undefined,
    'Open Source': undefined,
    'Contribute': undefined,
    'Source on GitHub': undefined,
    'Issues': undefined,
    'Pull Requests': undefined,
    'Code of Conduct': undefined,
    'Fork on GitHub': undefined,
    'Fork the Website': undefined,
    'Create an Issue': undefined,
    'Next': undefined,
    'Previous': undefined,
    'Website Copy Right Footer': undefined,
    'View On Github': undefined,
    'Axios Project Copy Right Footer': undefined,
    'License Label Footer': undefined
  },
  sidebar: [
    {
      type: 'heading',
      text: 'Начать'
    },
    {
      type: 'link',
      href: '/docs/intro',
      text: 'Введение'
    },
    {
      type: 'link',
      href: '/docs/example',
      text: 'Пример'
    },
    {
      type: 'link',
      href: '/docs/post_example',
      text: 'POST запросы'
    },
    {
      type: 'heading',
      text: 'Axios API'
    },
    {
      type: 'link',
      href: '/docs/api_intro',
      text: 'Axios API'
    },
    {
      type: 'link',
      href: '/docs/instance',
      text: 'Экземпляр Axios'
    },
    {
      type: 'link',
      href: '/docs/req_config',
      text: 'Конфигурация запроса'
    },
    {
      type: 'link',
      href: '/docs/res_schema',
      text: 'Схема ответа'
    },
    {
      type: 'link',
      href: '/docs/config_defaults',
      text: 'Конфигурация по умолчанию'
    },
    {
      type: 'link',
      href: '/docs/interceptors',
      text: 'Перехват запросов'
    },
    {
      type: 'link',
      href: '/docs/handling_errors',
      text: 'Обработка ошибок'
    },
    {
      type: 'link',
      href: '/docs/cancellation',
      text: 'Отмена запроса'
    },
    {
      type: 'link',
      href: '/docs/urlencoded',
      text: 'URL-кодирующие параметры'
    },
    {
      type: 'heading',
      text: 'Другое'
    },
    {
      type: 'link',
      href: '/docs/notes',
      text: 'Примечания'
    },
    {
      type: 'heading',
      text: 'Контрибьюторы'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md',
      text: 'Code of Conduct'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md',
      text: 'Пособие для соавторов'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CONTRIBUTING.md',
      text: 'Вклад в Axios'
    },
    {
      type: 'link',
      href: '/docs/translating',
      text: 'Перевод документации'
    }
  ]
};