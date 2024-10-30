const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "test",
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, fromm, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


await conn.updateBlockStatus("mek.key.remoteJid", "block") // Block user


    
}catch(e){
console.log(e)
reply(`${e}`)

}
})

