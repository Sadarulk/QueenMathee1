const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'
let dt = `*_QUEEN MATHEE XVIDEOS.COM SEARCH 🔎_*\n\n`
let cap = `\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

cmd({
    pattern: "xvideo",
    desc: "search xvideos",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return reply("*_Please give me a text._*")

const xv = await fetchJson(`${apilink}/search/xvideo?q=${q}`)


const array = xv.result;
        
if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

const result = array.map((movie, index) => `${index + 1}. *Title :* ${array[index].title}\n*Duration :* ${array[index].duration}\n*Link :* ${array[index].url}`).join("\n\n");

await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

       
        

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "xvdl",
    desc: "download xvideos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q.startsWith("https://")) return reply("*_Please give me a xvideos.com url._*")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${q}`)

const msg = `*_QUEEN MATHEE XVIDEO DOWNLOADER 📥_*

*ℹ Title:* ${xv_info.result.title}

*👁‍🗨 Views:* ${xv_info.result.views}

*👍 Likes:* ${xv_info.result.like}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: xv_info.result.image},caption:msg},{quoted:mek})
        //send video
        await conn.sendMessage(from,{document: {url:xv_info.result.dl_link},mimetype:"video/mp4",fileName:xv_info.result.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)

}
})
