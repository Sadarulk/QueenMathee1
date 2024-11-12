const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "boom",
    desc: "boom text send",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let s = q

let p = s.split("&")

console.log(p[0])
console.log(p[1])
	    
	for (let i = 0; i < ${p[1]}; i++) {
    console.log(`${p[0]}`);
}

		    
		    

}  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

