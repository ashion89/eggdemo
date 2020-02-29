
'use strict'
module.exports = app => {
    app.beforeStart(async () => {
        // const product = app.config.product;
        const ctx = app.createAnonymousContext();
        // await console.log( `...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴ \r\n ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴ \r\n ▍．∴∵∴∵．∴▅███████████☆ ★∵ \r\n ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤      欢迎使用 ${product.productDescription}${product.version}\r\n ． ◥█████████████████████████◤      ${ctx.protocol}://${ctx.ip}\r\n .．.．◥████████████████████■◤      ${product.productDescriptionEnglish}`)
    });
};
