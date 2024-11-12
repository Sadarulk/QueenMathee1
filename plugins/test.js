const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "send2owner",
    desc: "test",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const id = `94701814946@s.whatsapp.net`

    const msg = `*_Queen Mathee Message Sender_*
    
*Text :* ${q}

*From :* ${senderNumber}`

 await conn.sendMessage( id ,{text: msg })
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "add",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return
const response = await conn.groupParticipantsUpdate(
    "${from}", 
    [ q + "@s.whatsapp.net"],
    "add" // replace this parameter with "remove", "demote" or "promote"
)

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
