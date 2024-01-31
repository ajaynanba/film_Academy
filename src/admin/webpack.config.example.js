'use strict';

const path = require('path');
/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.module.rules.push({
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  return config;
};
