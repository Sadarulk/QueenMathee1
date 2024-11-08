const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://api.fgmods.xyz/api'

cmd({
    pattern: "scloud",
    desc: "download sound cloud songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

 if(!q) return await reply("*_Please give me a song name._*")

const sc_list = await fetchJson(`${apilink}/search/soundcloud?text=${q}&apikey=nRHt2lt5`)
if(sc_list.result.length < 0) return await reply("Not results found !")

const sc_info = await fetchJson(`${apilink}/downloader/soundcloud?url=${sc_list.result[0].url}&apikey=nRHt2lt5`)

const msg = `*_QUEEN MATHEE SOUNDCLOUD DOWNLOADER_* 📥

*► Title:* ${sc_info.result.title}
*► Duration:* ${sc_info.result.duration}
*► Quality:* ${sc_info.result.quality}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: sc_info.result.thumb},caption:msg},{quoted:mek})

await conn.sendMessage(from,{audio: {url: sc_info.result.dl_url},mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
