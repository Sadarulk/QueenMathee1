const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "attp",
    desc: "attp sticker",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q) return reply("*_Please give me a text._*")

     let attp = `https://api.fgmods.xyz/api/maker/attp?text=${q}&apikey=nRHt2lt5`

       await conn.sendMessage(from,{sticker: { url : attp},package: 'QueenMathee'},{ quoted: mek })
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
