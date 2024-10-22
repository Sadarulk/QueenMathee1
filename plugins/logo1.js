const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "wanted",
    desc: "Create logo",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q && !q.startsWith("https://")) return reply("*_Please give me a image url._*")

let data = await fetchJson(`https://api.fgmods.xyz/api/maker/wanted?url=${q}&apikey=nRHt2lt5`)

await conn.sendMessage(from,{image:{url:data.result},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
