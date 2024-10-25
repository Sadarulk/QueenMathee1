const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "movie",
    desc: "download movies",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    if(!q) return reply("*_Please give me a movie name_*")

const mv_list = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${q}`)
if(mv_list.result.length < 0) return await reply("*_Not results found !_*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${mv_list.result.data[0].link}`)

const msg = `*_QUEEN MATHEE MOVIE DOWNLOADER_* 📥

*► Movie Name:* ${mv_info.result.data.title}

*► Released Date:* ${mv_info.result.data.date}

*► Runtime:* ${mv_info.result.data.runtime}

*► IMDB Rate:* ${mv_info.result.data.imdbRate}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[5].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
