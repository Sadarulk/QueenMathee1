const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "mvdlink",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const msg = `*_QUEEN MATHEE MOVIE DOWNLOAD LINKS_* 📥

*Size -* ${mv_info.result.data.dl_links[0].size}
*Link -* ${mv_info.result.data.dl_links[0].link}

*Size -* ${mv_info.result.data.dl_links[1].size}
*Link -* ${mv_info.result.data.dl_links[1].link}

*Size -* ${mv_info.result.data.dl_links[2].size}
*Link -* ${mv_info.result.data.dl_links[2].link}

*Size -* ${mv_info.result.data.dl_links[3].size}
*Link -* ${mv_info.result.data.dl_links[3].link}

*Size -* ${mv_info.result.data.dl_links[4].size}
*Link -* ${mv_info.result.data.dl_links[4].link}

*Size -* ${mv_info.result.data.dl_links[5].size}
*Link -* ${mv_info.result.data.dl_links[5].link}

*Size -* ${mv_info.result.data.dl_links[6].size}
*Link -* ${mv_info.result.data.dl_links[6].link}

*Size -* ${mv_info.result.data.dl_links[7].size}
*Link -* ${mv_info.result.data.dl_links[7].link}

*Size -* ${mv_info.result.data.dl_links[8].size}
*Link -* ${mv_info.result.data.dl_links[8].link}

*Size -* ${mv_info.result.data.dl_links[9].size}
*Link -* ${mv_info.result.data.dl_links[9].link}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})  

}catch(e){
console.log(e)
reply(`${e}`)

}
})
