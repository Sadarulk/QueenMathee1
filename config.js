const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DrJV2bKB#3HQtZ1TY2s7MMBf2C8Dro6wBnMQp8fyi7o3cv1juzoI",
MONGODB: process.env.MONGODB || "mongodb://mongo:XHVHnqUptVkdnPhgZyUExTisHaEfUSgL@autorack.proxy.rlwy.net:33494",
};
