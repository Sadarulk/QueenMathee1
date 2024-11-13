const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "test",
    desc: "test cmd",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (101 > q && q >= 75) {
    reply(`A`);
} else if (75 > q && q >= 65) {
    reply(`B`);
} else if (65 > q && q >= 55) {
    reply(`C`);
} else if (55 > q && q >= 35) {
    reply(`S`);
} else {
    reply(`W`);
}

    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
