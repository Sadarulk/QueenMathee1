const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "test",
    desc: "test cmd",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (q > 75) return reply(`A`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
