const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const config = require('../config')
const fg = require('api-dylux')
const yts = require('yt-search')

//=====audio-dl=====

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")
const search = await yts(q)
const data = search.videos[0];

    if (!data || data.length === 0) {
            return reply("*_Can't find anything._*");
        }

let desc = `
*_QUEEN MATHEE AUDIO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
├ 🖇️ *Link:* ${data.url}
└───────────────────

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download audio

let detail = await fetchJson(`https://api.ibrahimadams.us.kg/api/download/ytmp3?url=${data.url}&apikey=ibraah-help`)

//send audio+document

await conn.sendMessage(from,{audio: {url:detail.result.download_url},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:detail.result.download_url},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=====video-dl=====

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")
const search = await yts(q)
const data = search.videos[0];

     if (!data || data.length === 0) {
            return reply("*_Can't find anything._*");
        }

let desc = `
*_QUEEN MATHEE VIDEO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
├ 🖇️ *Link:* ${data.url}
└───────────────────

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download video

let detail = await fetchJson(`https://api.ibrahimadams.us.kg/api/download/ytmp4?url=${data.url}&apikey=ibraah-help`)

//send video+document

await conn.sendMessage(from,{video: {url:detail.result.download_url},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:detail.result.download_url},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
