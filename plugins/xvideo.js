const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "xvideo",
    desc: "download xvideos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return reply("*_Please give me a text._*")

const xv_list = await fetchJson(`${apilink}/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("*_Not results found !_*")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)

const msg = `*_QUEEN MATHEE XVIDEO DOWNLOADER 📥_*

*► Title:* ${xv_info.result.title}

*► Views:* ${xv_info.result.views}

*► Likes:* ${xv_info.result.like}

*► Size:* ${xv_info.result.size}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`



       
        await conn.sendMessage(from,{image:{url: xv_info.result.image},caption:msg},{quoted:mek})
        //send video
        await conn.sendMessage(from,{document: {url:xv_info.result.dl_link},mimetype:"video/mp4",fileName:xv_info.result.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ"},{quoted:mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
