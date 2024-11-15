const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XvgFnbyR#ItFGa5Af5yvjo2BeTdwTeov6QmiAmKtbFvON16I81YQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:XxTyOIGXHdHSLzKgQyjRhcHhMIgUOhWN@junction.proxy.rlwy.net:34502",
};
