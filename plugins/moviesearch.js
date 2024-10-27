const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "mvsearch",
    desc: "search movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    if(!q) return reply("*_Please give me a movie name_*")

const mv_list = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${q}`)
if(mv_list.result.length < 0) return await reply("*_Not results found !_*")

const msg = `*_QUEEN MATHEE MOVIE SEARCH 🔎_*

1.. *+ Title :* ${mv_list.result.data[0].title}
    *+ Year :* ${mv_list.result.data[0].year}
    *+ Link :* ${mv_list.result.data[0].link}

2.. *+ Title :* ${mv_list.result.data[1].title}
    *+ Year :* ${mv_list.result.data[1].year}
    *+ Link :* ${mv_list.result.data[1].link}

3.. *+ Title :* ${mv_list.result.data[2].title}
    *+ Year :* ${mv_list.result.data[2].year}
    *+ Link :* ${mv_list.result.data[2].link}

4.. *+ Title :* ${mv_list.result.data[3].title}
    *+ Year :* ${mv_list.result.data[3].year}
    *+ Link :* ${mv_list.result.data[3].link}

5.. *+ Title :* ${mv_list.result.data[4].title}
    *+ Year :* ${mv_list.result.data[4].year}
    *+ Link :* ${mv_list.result.data[4].link}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await m.reply(msg)

}catch(e){
console.log(e)
reply(`${e}`)

}
})