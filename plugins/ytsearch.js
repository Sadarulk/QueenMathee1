const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const config = require('../config')
const yts = require('yt-search')

let dt = `*_QUEEN MATHEE YOUTUBE SEARCH 🔎_*\n\n`
let cap = `\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

cmd({
    pattern: "yt",
    desc: "Search in youtube",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a text._*")
const search = await yts(q)

const array = search.videos;
        
 if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

const result = array.map((movie, index) => `${index + 1}. *Title :* ${array[index].title}\n*Duration :* ${array[index].timestamp}\n*Link :* ${array[index].url}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})
            

    }catch(e){
     console.log(e)
     reply(`${e}`)


}
})
