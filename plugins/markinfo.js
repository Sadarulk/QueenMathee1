const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "markinfo",
    desc: "get a mark details",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let A = `● Mark : *${q}*

● Result : *A*

● Pass :  *විශිෂ්ට සාමර්ථ්‍යය* (_Distinction Pass_)

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`

let B = `● Mark : *${q}*

● Result : *B*

● Pass :  *අධි සම්මාන සාමර්ථ්‍යය* (_Very Good Pass_)

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`

let C = `● Mark : *${q}*

● Result : *C*

● Pass :  *සම්මාන සාමර්ථ්‍යය* (_Credit Pass_)

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`

let S = `● Mark : *${q}*

● Result : *S*

● Pass :  *සාමාන්‍ය සාමර්ථ්‍යය* (_Ordinary Pass_)

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`

let W = `● Mark : *${q}*

● Result : *W*

● Pass :  *දුර්වල* (_Weak_)

©Special note - තවත් පෝන් එක ඔබ ඔබ ඉන්නැතුව ගිහින් පාඩම් කරපන්.

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`

if (101 > q && q >= 75) {
    reply(`${A}`);
} else if (75 > q && q >= 65) {
    reply(`${B}`);
} else if (65 > q && q >= 55) {
    reply(`${C}`);
} else if (55 > q && q >= 35) {
    reply(`${S}`);
} else if (35 > q && q >= 0) {
    reply(`${W}`);
} else {
    reply(`*_Give me a valid mark._*`)
}

    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
