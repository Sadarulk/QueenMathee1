const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

let cap = '> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ'

cmd({
    pattern: "fb2",
    alias: ["facebook2"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")
        //fetch data from api  
        let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/fbdl1?url=${q}`)

        const array = data.result;
        
        if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

         let fb = `*_QUEEN MATHEE FACEBOOK DOWNLOADER 📥_*

🖇️ Url : ${data.result.url}

Your facebook video is downloading...

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
        
        await conn.sendMessage(from,{image:{url: data.result.thumbnail },caption:fb},{quoted:mek})

        //send video (hd,sd)

        await conn.sendMessage(from,{video: {url: data.result.hd},mimetype:"video/mp4",caption: `*HD QUALITY*\n\n${cap}` },{quoted: mek})
        await conn.sendMessage(from,{video: {url: data.result.sd},mimetype:"video/mp4",caption: `*SD QUALITY*\n\n${cap}` },{quoted: mek})  

        }catch(e){
        console.log(e)
        reply(`${e}`)

    }
    })

cmd({
    pattern: "tt2",
    alias: ["tiktok2"],
    desc: "download tt videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a tiktok url._*")
        //fetch data from api  
        let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/tiktok?url=${q}`)

         const array = data.result;
        
        if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }
        
let tt = `*_QUEEN MATHEE TIKTOK DOWNLOADER 📥_*

● Title : ${data.result.title}

● Author : ${data.result.author}

● Duration : ${data.result.duration}

● Url : ${q}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

        
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/tiktok.jpg?raw=true"},caption:tt},{quoted:mek})
        
        await conn.sendMessage(from, { video: { url: data.result.hdVideo }, mimetype: "video/mp4", caption: `*without WaterMark*\n\n${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.result.wmVideo }, mimetype: "video/mp4", caption: `*with WaterMark*\n\n${cap}` }, { quoted: mek }) 
        await conn.sendMessage(from, { audio: { url: data.result.sound }, mimetype: "mpeg/mp3"}, { quoted: mek })
        

} catch (e) {
console.log(e);
reply(`${e}`);
}
})
