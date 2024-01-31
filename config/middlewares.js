module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", process.env.BUNNY_PULL_ZONE],
          "media-src": ["'self'", "data:", "blob:", process.env.BUNNY_PULL_ZONE],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  // 'strapi::body',
  {
    name: "strapi::body",
    config: {
      formLimit: "3000mb", // modify form body
      jsonLimit: "500mb", // modify JSON body
      textLimit: "500mb", // modify text body
      formidable: {
        maxFileSize: 3 * 1024 * 1024 * 1024 // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
