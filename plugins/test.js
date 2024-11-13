const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "tttt",
    desc: "test cmd",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const msg = mek 
const id = '120363292156762185@g.us'


await conn.sendMessage(id,{text: msg})


}catch(e){
console.log(e)
reply(`${e}`)

}
})
