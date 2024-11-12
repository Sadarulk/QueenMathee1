const { proto, downloadContentFromMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "owner",
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {


m.replyContact = (name, info, number) => {

		let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'



await conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: mek })

}


}catch(e){
console.log(e)
reply(`${e}`)

}
})

