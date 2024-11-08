const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7q4nwQ6T#eG4OtQsaH-WAw-x69I92hw1gcU3_rTZyp4fDgM2-PXQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:XxTyOIGXHdHSLzKgQyjRhcHhMIgUOhWN@junction.proxy.rlwy.net:34502",
};
