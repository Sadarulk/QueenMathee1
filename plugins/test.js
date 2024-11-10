const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "test",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let msg = `*_Hi, This is Queen Mathee Test Msg._*`
  
  await conn.sendMessage(120363362209453987@g.us,{text: ${msg} },{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
