const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "send",
    alias: ["forward","fw"],
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

	if(!isOwner) return
    
await conn.sendMessage(q, {forward: quoted })

}catch(e){
console.log(e)
reply(`${e}`)

}
})

