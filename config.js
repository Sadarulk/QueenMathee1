const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bmZm1KwC#W1GxkvJu5-inBwmimnPPfK0GFd5Ixq5AvvpMdh0usJ8",
MONGODB: process.env.MONGODB || "mongodb://mongo:vBzTgFNmkcAioMYxgpuaNGQbSRmvbisk@junction.proxy.rlwy.net:48886",
};
