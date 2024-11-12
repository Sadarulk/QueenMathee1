const config = require('../config')
const { cmd, commands } = require('../command')
const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')


cmd({
    pattern: "report",
    desc: "test",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const id = `94701814946@s.whatsapp.net`

    const msg = `*_Queen Mathee Message_*
    
*Text :* ${q}

*From :* ${senderNumber}`

 await conn.sendMessage( id ,{text: msg })
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "pp",
    desc: "test",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 // for low res picture
const ppUrl = await sock.profilePictureUrl( q + "@s.whatsapp.net", 'image')
console.log("download profile picture from: " + ppUrl)

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
