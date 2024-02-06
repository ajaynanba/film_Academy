import favicon from "./extensions/favicon.png";
import logo from "./extensions/bfftLogo.jpg"

export default {
  config: {
    // replace favicon with a custom icon
    head: {
      favicon: logo,
    },
    locales: ["en"],
      translations: {
        en: {
          "app.components.LeftMenu.navbrand.title":"Bright Future",
          "app.components.LeftMenu.navbrand.workplace": "Film Tech Academy",
        },
      },
  },
};

// const config = {
//  head: {
//   // favicon: favicon
//  },
//  locales: ["en"],
//  translations: {
//    en: {
//      "app.components.LeftMenu.navbrand.workplace": "test",
//      "app.components.LeftMenu.navbrand.title":"New Website Dashboard",
//      // Translate a plugin's key/value pair by adding the plugin's name as a prefix
//      // In this case, we translate the "plugin.name" key of plugin "content-type-builder"
//     //  "content-type-builder.plugin.name": "Constructeur de Type-Contenu",
//    },
//  },
// };

// const bootstrap = (app) => {
//   console.log(app);
// };

// export default {
//   config,
//   bootstrap,
// };
