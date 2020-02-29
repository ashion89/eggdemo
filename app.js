
'use strict'
module.exports = app => {
    app.beforeStart(async () => {
        // const product = app.config.product;
        const ctx = app.createAnonymousContext();
          console.log("success=========");
    });
};
