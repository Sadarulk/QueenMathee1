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
  { title: "MR NIMA WA", no: "94715166712" },
  { title: "MR NIMA TG", no: "https://t.me/mrnimaofc_yt" },
  { title: "MR NIMA YT", no: "yotube.com/@MRNIMAOFC" }
];

for(let index = 0; index < array.length; index++)


 let msg = `Name = ${array[index].title}
        Number = ${array[index].no}`
        
await conn.sendMessage(from, { text: msg },{quoted: mek})



}catch(e){
console.log(e)
reply(`${e}`)

}
})
