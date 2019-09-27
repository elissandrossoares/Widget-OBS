const CHANNEL_NAME = 'Nextboot';
const BOT_USERNAME = 'Nextboot';
const OAUTH_TOKEN = 'oauth:ks0r964eg02ionbpe1fc5cak1gumql'; //
module.exports.PORT = 8080;

// Define configuration options
module.exports.opts = {
    identity: {
        username: BOT_USERNAME,
        password: OAUTH_TOKEN
    },
    channels: [CHANNEL_NAME]
};