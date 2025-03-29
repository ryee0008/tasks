/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1743220133225_7629';

  // add your middleware config here
  config.middleware = [];

  // Enable and configure bodyParser to handle JSON and form request bodies
  config.bodyParser = {
    enable: true,
    jsonLimit: '5mb',
    formLimit: '5mb',
  };

  // Disable CSRF protection for development/testing (e.g., Postman)
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
