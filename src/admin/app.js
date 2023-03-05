import AuthLogo from './extension/node.png'
import Favicon from './extension/favicon.png'

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: AuthLogo
  },
   // Replace the Strapi logo in the main navigation
  menu: {
    logo: AuthLogo
  },
  // Replace the favicon
  head: {
    favicon: Favicon,
  },
  notifications: {
    release: false
  },
  tutorials: false,
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
