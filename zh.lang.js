/**
 * Configuration for the english (original) translation
 */
module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: '中文',
  prefix: '/zh/',
  dir: 'ltr',
  lang: 'en',
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: 'Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
    subhead: `Axios 使用简单,包尺寸小且提供了易于扩展的接口。`
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
      text: '起步'
    },
    {
      type: 'link',
      href: '/docs/intro',
      text: '介绍'
    },
    {
      type: 'link',
      href: '/docs/example',
      text: '用例'
    },
    {
      type: 'link',
      href: '/docs/post_example',
      text: 'POST请求'
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
      text: 'Axios 实例'
    },
    {
      type: 'link',
      href: '/docs/req_config',
      text: '请求配置'
    },
    {
      type: 'link',
      href: '/docs/res_schema',
      text: '响应结构'
    },
    {
      type: 'link',
      href: '/docs/config_defaults',
      text: '默认配置'
    },
    {
      type: 'link',
      href: '/docs/interceptors',
      text: '拦截器'
    },
    {
      type: 'link',
      href: '/docs/handling_errors',
      text: '错误处理'
    },
    {
      type: 'link',
      href: '/docs/cancellation',
      text: '取消请求'
    },
    {
      type: 'link',
      href: '/docs/urlencoded',
      text: '请求体编码'
    },
    {
      type: 'heading',
      text: '其他'
    },
    {
      type: 'link',
      href: '/docs/notes',
      text: '注意事项'
    },
    {
      type: 'heading',
      text: '致贡献者'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md',
      text: '行为准则'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md',
      text: 'Collaborator指南'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CONTRIBUTING.md',
      text: '为Axios做出贡献'
    },
    {
      type: 'link',
      href: '/docs/translating',
      text: '翻译文档'
    }
  ]
};