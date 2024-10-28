const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "owner",
    desc: "search movies",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
   const data = [
{ title: "MR NIMA WA", no: "94715166712" }

]
for(let index = 0; index < array.length; index ++)

return reply(`${data[index].no}`)

await m.reply(msg)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
