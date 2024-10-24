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
        let data = await fetchJson(`https://api.maher-zubair.xyz/downloader/apk?apikey=d2d02440c70a98a415&q=${q}`)

let msg = `*_QUEEN MATHEE APK DOWNLOADER 📥_*

*■ App name:* ${data.result.name}
*■ Last update:* ${data.result.lastup}
*■ Size:* ${data.result.size}
*■ Package:* ${data.result.package}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

        await conn.sendMessage(from,{image:{url:data.result.icon},caption:msg},{quoted:mek})
        //send apk
        await conn.sendMessage(from,{document: {url:data.result.dllink},mimetype:"application/vnd.android.package-archive",fileName:data.result.name + ".apk"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
