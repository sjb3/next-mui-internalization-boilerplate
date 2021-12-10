// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en-US', 'KR'],
//     defaultLocale: 'en-US', // Sub-path Routing puts the locale in the url path.
//   },
// };

const nextTranslate = require('next-translate');

module.exports = {
  // reactStrictMode: true,
  ...nextTranslate(),
  // i18n: {
  //   locales: ['en-US', 'KR'],
  //   defaultLocale: 'en-US', // Sub-path Routing puts the locale in the url path.
  // },
};

// module.exports = nextTranslate({
//   webpack: (config, { isServer, webpack }) => {
//     return config;
//   },
// });
