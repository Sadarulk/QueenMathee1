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
    if (!q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const ts = await fetchJson(`${apilink}/movie/sinhalasub/tvshow?url=${q}`)

	    const msg = `*_QUEEN MATHEE TVSHOW DETAILS_* 🔎

🍟 *TV Show Name :* ${ts.result.data.title}

🧿 *Release Date :* ${ts.result.data.date}

🎀 *Categories :* ${ts.result.data.category}

⭐ *IMDB Rate :* ${ts.result.data.imdb}

🤵‍♂ *Director* : ${ts.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

	
	    await conn.sendMessage(from,{image:{ url: ts.result.data.image },caption: msg },{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)

}
