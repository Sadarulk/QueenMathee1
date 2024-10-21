const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "hirunews",
    desc: "get hiru news",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/news/hiru`)

let news = `*_QUEEN MATHEE HIRU NEWS 📰_*

■ *Title:* ${data.result.title}
 
■ *News:* ${data.result.desc}
 
■ *Link:* ${data.result.url}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: data.result.image},caption:news},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
