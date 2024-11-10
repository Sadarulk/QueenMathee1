const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "report",
    desc: "test",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const id = `94701814946@s.whatsapp.net`

    const msg = `*_Queen Mathee error Report_*
    
    *Text :* ${q}
    
    *From :* ${senderNumber}`

 await conn.sendMessage( id ,{text: msg })
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
