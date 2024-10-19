const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "yta",
    alias: ["ytmp3"],
    desc: "download audio",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q && !q.startsWith("https://")) return reply("*_Please give me a youtube url._*")

        //fetch data from api  
        let data = await fetchJson(`https://api.ibrahimadams.us.kg/api/download/ytmp3?url=${q}&apikey=ibraah-help`)

let yta = `*_QUEEN MATHEE AUDIO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.result.title}
├ 👁️‍🗨️ *Quality:* ${data.result.quality}
└───────────────────

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

        await conn.sendMessage(from,{image:{url:data.result.thumbnail},caption:yta},{quoted:mek})
        //send video
        await conn.sendMessage(from,{audio: {url:data.result.download_url},mimetype:"audio/mpeg"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "ytv",
    alias: ["ytmp4"],
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q && !q.startsWith("https://")) return reply("*_Please give me a youtube url._*")

        //fetch data from api  
        let data = await fetchJson(`https://api.ibrahimadams.us.kg/api/download/ytmp4?url=${q}&apikey=ibraah-help`)

let ytv = `*_QUEEN MATHEE VIDEO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.result.title}
├ 👁️‍🗨️ *Quality:* ${data.result.quality}
└───────────────────

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

        await conn.sendMessage(from,{image:{url:data.result.thumbnail},caption:ytv},{quoted:mek})
        //send video
        await conn.sendMessage(from,{video: {url:data.result.download_url},mimetype:"video/mp4"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})