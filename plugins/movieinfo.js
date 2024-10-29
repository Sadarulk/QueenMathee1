const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "movie2",
    desc: "get movie info",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const msg = `*_QUEEN MATHEE MOVIE DETAILS_* 🔎

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})  

}catch(e){
console.log(e)
reply(`${e}`)

}
})
