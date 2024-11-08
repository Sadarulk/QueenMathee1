const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')



cmd({
    pattern: "apk",
    alias: ["app"],
    desc: "download apk",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q) return reply("*_Please give me a apk name._*")

        //fetch data from api  
        const apk = await fetchJson(`https://api.nexoracle.com/downloader/apk?apikey=free_key@maher_apis&q=${q}`)

const msg = `*_QUEEN MATHEE APK DOWNLOADER 📥_*

*■ App name:* ${apk.result.name}
*■ Last update:* ${apk.result.lastup}
*■ Size:* ${apk.result.size}
*■ Package:* ${apk.result.package}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

        await conn.sendMessage(from,{image:{url: apk.result.icon},caption:msg},{quoted:mek})
        //send apk
        await conn.sendMessage(from,{document: {url: apk.result.dllink},mimetype:"application/vnd.android.package-archive",fileName: apk.result.name + ".apk"},{quoted:mek})
         

}catch(e){
console.log(e)
reply(`${e}`)

}
})
