const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "73JniBwJ#6m4-G4QImIGUUm7Nank6a-BHIhiT0OZOT2BX2LlS_gw",
MONGODB: process.env.MONGODB || "mongodb://mongo:kobdLigMzoogjRYUppftgZByPGIvVcwl@autorack.proxy.rlwy.net:10995",
};
