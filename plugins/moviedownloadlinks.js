const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "mvdlink",
    desc: "get movie download links",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
  
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const array = mv.result.data.dl_links;

for(let index = 0; index < array.length; index++) {

const msg = `*Quality :* ${array[index].quality}\n\n*Size :* ${array[index].size}\n\n*Link -* ${array[index].link}`
            
await conn.sendMessage(from, { text: msg }, {quoted: mek})

            }

}catch(e){
console.log(e)
reply(`${e}`)

}
})
