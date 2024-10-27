const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "yt",
    desc: "search youtube",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    if(!q) return reply("*_Please give me a movie name_*")

const yt_list = await fetchJson(`https://api.nexoracle.com/downloader/yt-search?apikey=d2d02440c70a98a415&q=${q}`)


const msg = `*_QUEEN MATHEE YOUTUBE SEARCH 🔎_*

1.. *+ Title :* ${yt_list.result[0].title}
    *+ Author :* ${yt_list.result[0].author.name}
    *+ Duration :* ${yt_list.result[0].timestamp}
    *+ Link :* ${yt_list.result[0].url}

2.. *+ Title :* ${yt_list.result[1].title}
    *+ Author :* ${yt_list.result[1].author.name}
    *+ Duration :* ${yt_list.result[1].timestamp}
    *+ Link :* ${yt_list.result[1].url}

3.. *+ Title :* ${yt_list.result[2].title}
    *+ Author :* ${yt_list.result[2].author.name}
    *+ Duration :* ${yt_list.result[2].timestamp}
    *+ Link :* ${yt_list.result[2].url}

4.. *+ Title :* ${yt_list.result[3].title}
    *+ Author :* ${yt_list.result[3].author.name}
    *+ Duration :* ${yt_list.result[3].timestamp}
    *+ Link :* ${yt_list.result[3].url}

5.. *+ Title :* ${yt_list.result[4].title}
    *+ Author :* ${yt_list.result[4].author.name}
    *+ Duration :* ${yt_list.result[4].timestamp}
    *+ Link :* ${yt_list.result[4].url}

6.. *+ Title :* ${yt_list.result[5].title}
    *+ Author :* ${yt_list.result[5].author.name}
    *+ Duration :* ${yt_list.result[5].timestamp}
    *+ Link :* ${yt_list.result[5].url}

7.. *+ Title :* ${yt_list.result[6].title}
    *+ Author :* ${yt_list.result[6].author.name}
    *+ Duration :* ${yt_list.result[6].timestamp}
    *+ Link :* ${yt_list.result[6].url}

8.. *+ Title :* ${yt_list.result[7].title}
    *+ Author :* ${yt_list.result[7].author.name}
    *+ Duration :* ${yt_list.result[7].timestamp}
    *+ Link :* ${yt_list.result[7].url}

9.. *+ Title :* ${yt_list.result[8].title}
    *+ Author :* ${yt_list.result[8].author.name}
    *+ Duration :* ${yt_list.result[8].timestamp}
    *+ Link :* ${yt_list.result[8].url}

10.. *+ Title :* ${yt_list.result[9].title}
    *+ Author :* ${yt_list.result[9].author.name}
    *+ Duration :* ${yt_list.result[9].timestamp}
    *+ Link :* ${yt_list.result[9].url}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: yt_list.result[0].thumbnail},caption:msg},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})