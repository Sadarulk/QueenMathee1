const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "tvshow",
    desc: "get tvshow info",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/tvshow?url=${q}`)


        const array = mv.result.data.episodes;

	for(let index = 0; index < array.length; index++)

const msg = `*_QUEEN MATHEE TVSHOW DETAILS_* 🔎

🍟 *TV Show Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdb}

🤵‍♂ *Director* : ${mv_info.result.data.director}

📝 *Description:* ${mv_info.result.data.desc}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

const msg2 = `*S & E :* ${array[index].title}\n\n*Date :* ${array[index].date}\n\n*Link :* ${array[index].episode_link}`

await conn.sendMessage(from,{image:{url: mv_info.result.data.image},caption:msg},{quoted:mek})  
await conn.sendMessage(from, { text: msg2 }, {quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})