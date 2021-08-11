const ngrok = require('ngrok');

(async function() {
    await ngrok.authtoken(process.env.NGROK_AUTH_TOKEN);
    const url = await ngrok.connect({proto: 'tcp', addr: 3389});
    console.log(url)
})();