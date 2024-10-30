const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "test",
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Lakmal Sadaru\n' // full name
            + 'ORG:Queen Mathee;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94701814946:+94 70181 4946\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg  = await conn.sendMessage(
    id,
    { 
        contacts: { 
            displayName: 'Sadaru', 
            contacts: [{ vcard }] 
        }
    }
)
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})

