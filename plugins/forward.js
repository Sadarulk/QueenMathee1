const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "send",
    alias: ["forward","fw"],
    desc: "forward msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

	if(!isOwner) return

    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    const isQuotedVideo = m.quoted ? ((m.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'videoMessage') : false)) : false
    const isQuotedAudio = m.quoted ? ((m.quoted.type === 'audioMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'audioMessage') : false)) : false
    const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false

	    if ((m.type === 'imageMessage') || isQuotedImage) {
		    
		    await conn.sendMessage( q , {image: quoted })

}  else if ( isQuotedVideo ) { 

 await conn.sendMessage( q , {video: quoted })

}else return await  reply(`*_This message can't forward._*`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})

