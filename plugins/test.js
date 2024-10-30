const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "join",
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


const response = await sock.groupAcceptInvite("https://chat.whatsapp.com/JtldTEMulKr2ZcLUpXCOLd")
console.log("joined to: " + response)
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})

