const config = require('../config')
const {cmd , commands} = require('../command')


cmd({
    pattern: "sttsviews",
    desc: "Stts views contact details",
    category: "other",
    filename: __filename
},
 
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let x = `*_Give me your details._*

_Example :-_ .sttsviews *Name* & *City* & *Age*`
    
    if(!q) return reply(`${x}`)

let a = q

let b = a.split("&")

let c = b[0]
let d = b[1]
let f = b[2]

let msg = `Ｆᴏʀ ＳᴛΔᵀᴜs Ｖɪᴇᴡs "🙇🏻‍♀️❤️🖇️

*⭕Name :* ${c}

*⭕From :* ${d}

*⭕Age :* ${f}
  
https://wa.me/${senderNumber}?text=(Stts+views)+Hii+${c}

*_⭕save daganna hode_* ✍️🙈💬

♡ ㅤ      ❍ㅤ        ⎙ㅤ       ⌲`

await conn.sendMessage(from ,{text: msg},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
