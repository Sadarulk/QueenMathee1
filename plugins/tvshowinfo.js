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

const ts = await fetchJson(`${apilink}/movie/sinhalasub/tvshow?url=${q}`)


        const array = ts.result.data.episodes;

	for(let index = 0; index < array.length; index++){

const msg = `*S & E :* ${array[index].title}\n\n*Date :* ${array[index].date}\n\n*Link :* ${array[index].episode_link}`

await conn.sendMessage(from, { text: msg }, {quoted: mek})


}

}catch(e){
console.log(e)
reply(`${e}`)

}
})
