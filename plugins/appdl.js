const { fetchJson } = require('../lib/functions'); // Assuming this is a helper function for fetch requests
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "apk",
    alias: ["app"],
    desc: "download apk",
    category: "download",
    filename: __filename
}, 
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, reply }) => {
    try {
        if (!q) return reply("*_Please give me an APK name._*");

        // Fetch data from API
        const apk = await fetchJson(`https://api.nexoracle.com/downloader/apk?apikey=d2d02440c70a98a415&q=${q}`);

        if (!apk || !apk.result) {
            return reply("*_Sorry, I couldn't find the APK you're looking for._*");
        }

        const msg = `*_QUEEN MATHEE APK DOWNLOADER 📥_*

*■ App name:* ${apk.result.name}
*■ Last update:* ${apk.result.lastup}
*■ Size:* ${apk.result.size}
*■ Package:* ${apk.result.package}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`;

        // Send APK information with icon
        await conn.sendMessage(from, { 
            image: { url: apk.result.icon }, 
            caption: msg 
        }, { quoted: mek });

        // Send the APK file
        await conn.sendMessage(from, {
            document: { url: apk.result.dllink },
            mimetype: "application/vnd.android.package-archive",
            fileName: `${apk.result.name}.apk`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
