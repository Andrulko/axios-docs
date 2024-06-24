/**
 * Configuration for the english (original) translation
 */
module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: 'Español',
  prefix: '/es/',
  dir: 'ltr',
  lang: 'es',
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: 'Cliente HTTP basado en Promesas para el navegador y node.js',
    subhead: `Axios es un cliente HTTP simple basado en promesas para el navegador y node.js.
              Axios provee una librería fácil de usar en un paquete pequeño con una
              interfaz muy extensible.`
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
      text: 'Empezando'
    },
    {
      type: 'link',
      href: '/docs/intro',
      text: 'Introducción'
    },
    {
      type: 'link',
      href: '/docs/example',
      text: 'Ejemplo'
    },
    {
      type: 'link',
      href: '/docs/post_example',
      text: 'Petición POST'
    },
    {
      type: 'heading',
      text: 'API de Axios'
    },
    {
      type: 'link',
      href: '/docs/api_intro',
      text: 'API de Axios'
    },
    {
      type: 'link',
      href: '/docs/instance',
      text: 'La instancia Axios'
    },
    {
      type: 'link',
      href: '/docs/req_config',
      text: 'Configuración de Petición'
    },
    {
      type: 'link',
      href: '/docs/res_schema',
      text: 'Esquema de Respuesta'
    },
    {
      type: 'link',
      href: '/docs/config_defaults',
      text: 'Configuraciones por Defecto'
    },
    {
      type: 'link',
      href: '/docs/interceptors',
      text: 'Interceptores'
    },
    {
      type: 'link',
      href: '/docs/handling_errors',
      text: 'Manejando Errores'
    },
    {
      type: 'link',
      href: '/docs/cancellation',
      text: 'Cancelación'
    },
    {
      type: 'link',
      href: '/docs/urlencoded',
      text: 'Cuerpos de solicitud codificados como URL'
    },
    {
      type: 'heading',
      text: 'Otro'
    },
    {
      type: 'link',
      href: '/docs/notes',
      text: 'Notas'
    },
    {
      type: 'heading',
      text: 'Contribuidores'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md',
      text: 'Código de Conducta'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md',
      text: 'Guía del Colaborador'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CONTRIBUTING.md',
      text: 'Contribuir a Axios'
    },
    {
      type: 'link',
      href: '/docs/translating',
      text: 'Traducir estos documentos'
    }
  ]
};