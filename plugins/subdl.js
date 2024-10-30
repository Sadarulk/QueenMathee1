const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "sub",
    desc: "download subtitle",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return reply("*_Please give me a subtitle name_*")

const sub_list = await fetchJson(`${apilink}/search/baiscope?text=${q}`)
 if (!data || data.length === 0) {
            return reply("*_Can' find anything._*");
        }

const sub_info = await fetchJson(`${apilink}/download/baiscope?url=${sub_list.result.data[0].url}`)

const msg = `*_QUEEN MATHEE SUBTITLE DOWNLOADER 📥_*

*► Name:* ${sub_info.result.title}

*► Description:* ${sub_info.result.views}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`



       
        await conn.sendMessage(from,{image:{url: sub_info.result.image},caption:msg},{quoted:mek})
        
        await conn.sendMessage(from,{document: {url:sub_info.result.dl_link},mimetype:"application/vnd.rar",fileName:sub_info.result.title + ".rar"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
