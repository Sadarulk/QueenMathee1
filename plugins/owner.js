const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "owner",
    desc: "owner details",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
   let msg = `🧑‍💻 *_Owner & Developer :_* Sadaru

🪀 *_WhatsApp :_* wa.me/+94701814946

🌐 *_From :_* Kurunegala

📌 *_Student of :_* M.C.C

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

return reply(`${msg}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
