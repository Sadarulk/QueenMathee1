const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "toqr",
    desc: "download images",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q) return reply("*_Please give me a text._*")

          
       await conn.sendMessage(from,{image:{url:https://api.nexoracle.com/image-creating/qr-code?apikey=d2d02440c70a98a415&text=${q}}},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})