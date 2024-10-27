const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "movie",
    desc: "search movie",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    if(!q) return reply("*_Please give me a movie name_*")

const mv_list = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${q}`)
if(mv_list.result.length < 0) return await reply("*_Not movie found !_*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${mv_list.result.data[0].link}`)

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
