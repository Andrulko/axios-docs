/**
 * Configuration for the english (original) translation
 */
module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: 'فارسی',
  prefix: '/fa/',
  dir: 'rtl',
  lang: 'fa',
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: 'سرویس گیرنده HTTP مبتنی بر پرامیس (Promise) برای مرورگر و node.js ',
    subhead: `Axios یک سرویس گیرنده HTTP مبتنی بر پرامیس (Promise) برای مرورگر و node.js می باشد.
				Axios یک کتابخانه ساده حتی برای استفاده در یک بسته کوچک با رابط کاربری بسیار گسترده ارائه شده است.`
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
      text: 'شروع به کار'
    },
    {
      type: 'link',
      href: '/docs/intro',
      text: 'مقدمه'
    },
    {
      type: 'link',
      href: '/docs/example',
      text: 'مثال'
    },
    {
      type: 'link',
      href: '/docs/post_example',
      text: 'درخواست های ارسال'
    },
    {
      type: 'heading',
      text: 'رابط های برنامه‌نویسی پروژه'
    },
    {
      type: 'link',
      href: '/docs/api_intro',
      text: 'APIهای پروژه Axios'
    },
    {
      type: 'link',
      href: '/docs/instance',
      text: 'نمونه سازی از Axios'
    },
    {
      type: 'link',
      href: '/docs/req_config',
      text: 'پیکربندی درخواست ها'
    },
    {
      type: 'link',
      href: '/docs/res_schema',
      text: 'الگوی پاسخ ها'
    },
    {
      type: 'link',
      href: '/docs/config_defaults',
      text: 'تنظیمات پیش فرض'
    },
    {
      type: 'link',
      href: '/docs/interceptors',
      text: 'رهگیرها'
    },
    {
      type: 'link',
      href: '/docs/handling_errors',
      text: 'مدیریت خطاها'
    },
    {
      type: 'link',
      href: '/docs/cancellation',
      text: 'لغو درخواست'
    },
    {
      type: 'link',
      href: '/docs/urlencoded',
      text: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
    },
    {
      type: 'heading',
      text: 'متفرقه'
    },
    {
      type: 'link',
      href: '/docs/notes',
      text: 'نکات'
    },
    {
      type: 'heading',
      text: 'مشارکت کنندگان'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md',
      text: 'قوانین رفتاری'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md',
      text: 'راهنمای همکار (توسعه دهنده)'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CONTRIBUTING.md',
      text: 'مشارکت در توسعه Axios'
    },
    {
      type: 'link',
      href: '/docs/translating',
      text: 'ترجمه این اسناد'
    }
  ]
};