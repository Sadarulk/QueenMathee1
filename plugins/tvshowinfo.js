const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'
let cap = `\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

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


        const array = ts.result.data.episodes;

	    const msg = `*_QUEEN MATHEE TVSHOW DETAILS_* 🔎

🍟 *TV Show Name :* ${ts.result.data.title}

🧿 *Release Date :* ${ts.result.data.date}

🎀 *Categories :* ${ts.result.data.category}

⭐ *IMDB Rate :* ${ts.result.data.imdb}

🤵‍♂ *Director* : ${ts.result.data.director}

📝 *Description :* ${ts.result.data.desc}\n\n\n`

	

const result = array.map((movie, index) => `*Season & Episode :* ${array[index].title}\n\n*Date :* ${array[index].date}\n\n*Link :* ${array[index].episode_link}`).join("\n\n");
		
await conn.sendMessage(from, { text: `${msg} ${result} ${cap}` }, {quoted: mek})




}catch(e){
console.log(e)
reply(`${e}`)

}
})
