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
    
   const array = [
  { title: "Sadaru", no: "https://wa.me/94701814946" },
  { title: "Whatsapp Group", no: "https://chat.whatsapp.com/DTy4uNnbcO6FLkJJ0uIM1y" },
  { title: "YouTube", no: "www.youtube.com/@rocky999_ff" }
];

for(let index = 0; index < array.length; index++){
  
    await conn.sendMessage(from, { text: `⚖️ ${array[index].title}\n\n🖇️ ${array[index].no}` }, {quoted: mek})
    }


        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
