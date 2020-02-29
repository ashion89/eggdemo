'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/find/:id', controller.home.find);
  router.get('/up/:id', controller.home.up);
  router.get('/findall', controller.home.findall);
  router.get('/add', controller.home.add);
};
