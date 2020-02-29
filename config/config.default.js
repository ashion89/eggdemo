/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1581588108071_5635';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];
  config.mysql = {
    client: {
      // host
      host: '192.168.2.140',
      // 端口号
      port: '3307',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
  };
  return config;
};
