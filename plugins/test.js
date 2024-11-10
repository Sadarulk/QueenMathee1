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

    const id = `94741545187@s.whatsapp.net`

 await conn.sendMessage( id ,{text: q })
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
