const config = require('../config')
const {cmd , commands} = require('../command')
const  CRICKETNEWS  = require('sinhala-cricket-newsjs/cricket')

cmd({
    pattern: "sporty",
    desc: "get sporty news",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{



const all = await CRICKETNEWS.allnews(); // get all news link and titles.

if (!all) return reply(`*_News not found._*`)

const latest_link = all[0].link
const data = await CRICKETNEWS.fromLink(latest_link)

let news = `*_QUEEN MATHEE SPORTY NEWS 📰_*

■ *${data.title}*

■ ${data.date}

■ ${data.description}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: data.image},caption:news},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
