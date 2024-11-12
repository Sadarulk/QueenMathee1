const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "jid",
    desc: "get jids",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

 let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

reply(`${deviceq}`)
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})
