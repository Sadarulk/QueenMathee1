const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "test",
    desc: "test",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 await conn.sendMessage(`94741545187@s.whatsapp.net`,{text: `*_Hi, This is Queen Mathee Test Msg._*` })
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
