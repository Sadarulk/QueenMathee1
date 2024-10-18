const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//====your bot name=======
let cap = '> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ'
let fb = '*_QUEEN MATHEE FACEBOOK DOWNLOADER 📥_*\n\nYour facebook video is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
let tt = '*_QUEEN MATHEE TIKTOK DOWNLOADER 📥_*\n\nYour tiktok video is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
let tw = '*_QUEEN MATHEE TWITTER DOWNLOADER 📥_*\n\nYour twitter video is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
let gdrive = '*_QUEEN MATHEE GDRIVE DOWNLOADER 📥_*\n\nYour google drive file is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
let mfire = '*_QUEEN MATHEE MEDIAFIRE DOWNLOADER 📥_*\n\nYour mediafire file is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'



//fb downloader
cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")
        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/fbdl?url=${q}&apikey=nRHt2lt5`)
`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/facebook.jpg?raw=true"},caption:fb},{quoted:mek})
        //send video (hd,sd)
        await conn.sendMessage(from,{video: {url:data.result.HD},mimetype:"video/mp4",caption: `HD QUALITY\n\n${cap}` },{quoted: mek})
        await conn.sendMessage(from,{video: {url:data.result.Normal_video},mimetype:"video/mp4",caption: `SD QUALITY\n\n${cap}` },{quoted: mek})  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


//twitter dl (x)
cmd({
    pattern: "twdl",
    alias: ["twitter"],
    desc: "download tw videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a twitter url._*")
        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/twitter?url=${q}&apikey=nRHt2lt5`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/twitter.jpg?raw=true"},caption:tw},{quoted:mek})
        //send video (hd,sd)
        await conn.sendMessage(from, { video: {url:data.result.HD}, mimetype: "video/mp4", caption: `HD QUALITY\n\n${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: {url:data.result.SD}, mimetype: "video/mp4", caption: `SD QUALITY\n\n${cap}` }, { quoted: mek })  
          
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a google drive url._*")
        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=nRHt2lt5`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/gdrive.jpg?raw=true"},caption:gdrive},{quoted:mek})
        await conn.sendMessage(from, { document: { url: data.result.downloadUrl }, fileName: data.result.fileName, mimetype: data.result.mimetype, caption: cap }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mfire",
    alias: ["mediafire"],
    desc: "download mfire files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a mediafire url._*")
        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/mediafire?url=${q}&apikey=nRHt2lt5`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/mediafire.jpg?raw=true"},caption:mfire},{quoted:mek})
        await conn.sendMessage(from,{ document:{url:data.data.link_1}, fileName:data.data.name, mimetype: data.data.file_type, caption:cap},{quoted: mek})                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//tiktok dl
cmd({
    pattern: "tt",
    alias: ["tiktok"],
    desc: "download tt videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a tiktok url._*")
        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/tiktok?url=${q}&apikey=nRHt2lt5`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/tiktok.jpg?raw=true"},caption:tt},{quoted:mek})
        await conn.sendMessage(from, { video: { url: data.result.play }, mimetype: "video/mp4", caption: `without WaterMark\n\n${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.result.wmplay }, mimetype: "video/mp4", caption: `with WaterMark\n\n${cap}` }, { quoted: mek }) 
        

} catch (e) {
console.log(e);
reply(`${e}`);
}
})
