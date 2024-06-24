/**
 * Configuration for the english (original) translation
 */
module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: 'Français',
  prefix: '/fr/',
  dir: 'ltr',
  lang: 'fr',
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: 'Client HTTP basé sur les promesses pour navigateur et node.js',
    subhead: `Axios est un client HTTP simple basé sur les promesses compatible
              avec le navigateur et node.js.
              Il propose une librairie facile à utiliser et à étendre, le tout
              dans un tout petit package.`
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
      text: 'Démarrer'
    },
    {
      type: 'link',
      href: '/docs/intro',
      text: 'Introduction'
    },
    {
      type: 'link',
      href: '/docs/example',
      text: 'Exemple'
    },
    {
      type: 'link',
      href: '/docs/post_example',
      text: 'Requêtes POST'
    },
    {
      type: 'heading',
      text: 'API Axios'
    },
    {
      type: 'link',
      href: '/docs/api_intro',
      text: 'API Axios'
    },
    {
      type: 'link',
      href: '/docs/instance',
      text: 'L’instance Axios'
    },
    {
      type: 'link',
      href: '/docs/req_config',
      text: 'Configuration de requête'
    },
    {
      type: 'link',
      href: '/docs/res_schema',
      text: 'Schéma de réponse'
    },
    {
      type: 'link',
      href: '/docs/config_defaults',
      text: 'Configuration par défaut'
    },
    {
      type: 'link',
      href: '/docs/interceptors',
      text: 'Intercepteurs'
    },
    {
      type: 'link',
      href: '/docs/handling_errors',
      text: 'Gestion des erreurs'
    },
    {
      type: 'link',
      href: '/docs/cancellation',
      text: 'Annuler une requête'
    },
    {
      type: 'link',
      href: '/docs/urlencoded',
      text: 'URL-Encoder le contenu d’une requête'
    },
    {
      type: 'heading',
      text: 'Autre'
    },
    {
      type: 'link',
      href: '/docs/notes',
      text: 'Notes'
    },
    {
      type: 'heading',
      text: 'Contributeurs'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md',
      text: 'Code de conduite'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md',
      text: 'Guide du collaborateur'
    },
    {
      type: 'link',
      href: 'https://github.com/axios/axios/blob/master/CONTRIBUTING.md',
      text: 'Contribuer à Axios'
    },
    {
      type: 'link',
      href: '/docs/translating',
      text: 'Traduire cette documentation'
    }
  ]
};