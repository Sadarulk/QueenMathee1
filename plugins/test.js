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

function checkNumber(q) {
    if (101 > q >= 75) {
        return reply("A");
    } else if (75 > q >= 65) {
        return reply("B");
    } else if (65 > q >= 55) {
        return reply("C");
    } else if (55 > q >= 35) {
        return reply("S");
    } else {
        return reply("W");
    }
}

}catch(e){
console.log(e)
reply(`${e}`)

}
})
